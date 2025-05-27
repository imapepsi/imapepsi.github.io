class MarkdownLoader {
    constructor() {
        this.posts = [];
        this.loaded = false;
    }

    async loadBlogIndex() {
        if (this.loaded) return this.posts;

        try {
            // You'll need to maintain an index of your markdown files
            const response = await fetch('data/blog-index.json');
            const index = await response.json();

            this.posts = await Promise.all(
                index.posts.map(async (postInfo) => {
                    const postContent = await this.loadMarkdownPost(postInfo.file);
                    return { ...postInfo, content: postContent };
                })
            );

            this.loaded = true;
            return this.posts;
        } catch (error) {
            console.error('Error loading blog index:', error);
            return [];
        }
    }

    async loadMarkdownPost(filename) {
        try {
            const response = await fetch(`posts/${filename}`);
            const markdown = await response.text();
            return this.parseMarkdownPost(markdown);
        } catch (error) {
            console.error(`Error loading post ${filename}:`, error);
            return null;
        }
    }

    parseMarkdownPost(markdown) {
        const parts = markdown.split('---');
        if (parts.length < 3) return { frontMatter: {}, content: markdown };

        const frontMatterText = parts[1].trim();
        const content = parts.slice(2).join('---').trim();

        const frontMatter = this.parseFrontMatter(frontMatterText);

        return {
            frontMatter,
            content: this.markdownToHTML(content)
        };
    }

    parseFrontMatter(text) {
        const lines = text.split('\n');
        const frontMatter = {};

        lines.forEach(line => {
            const colonIndex = line.indexOf(':');
            if (colonIndex > -1) {
                const key = line.substring(0, colonIndex).trim();
                let value = line.substring(colonIndex + 1).trim();

                // Remove quotes if present
                if ((value.startsWith('"') && value.endsWith('"')) ||
                    (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.slice(1, -1);
                }

                // Parse arrays (tags)
                if (value.startsWith('[') && value.endsWith(']')) {
                    value = value.slice(1, -1).split(',').map(item =>
                        item.trim().replace(/["']/g, '')
                    );
                }

                // Parse booleans
                if (value === 'true') value = true;
                if (value === 'false') value = false;

                frontMatter[key] = value;
            }
        });

        return frontMatter;
    }

    markdownToHTML(markdown) {
        // Enhanced markdown parser (consider using marked.js for production)
        return markdown
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/gim, '<em>$1</em>')
            .replace(/`(.*?)`/gim, '<code>$1</code>')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')
            .replace(/\n\n+/gim, '</p><p>')
            .replace(/^(?!<[h|\/])/gim, '<p>')
            .replace(/(?<![>])$/gim, '</p>');
    }

    async getPostBySlug(slug) {
        const posts = await this.loadBlogIndex();
        return posts.find(post => post.slug === slug);
    }

    async getFeaturedPosts() {
        const posts = await this.loadBlogIndex();
        return posts.filter(post => post.frontMatter.featured);
    }

    async getPostsByCategory(category) {
        const posts = await this.loadBlogIndex();
        return posts.filter(post => post.frontMatter.category === category);
    }
}

// data/blog-index.json
/*
{
  "posts": [
    {
      "file": "2023-09-15.md",
      "slug": "why-a-phd"
    },
    {
      "file": "2025-06-01.md",
      "slug": "motherhood-and-research"
    }
  ]
}
*/