// Enhanced blog post loader with recent posts functionality
let blogPosts = {};

// Load blog posts index
async function loadBlogIndex() {
    try {
        const response = await fetch('./data/blog-index.json');

        if (!response.ok) {
            throw new Error(`Failed to load blog index: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();

        // Convert array to object with slug as key for easier lookup
        blogPosts = {};
        data.posts.forEach(post => {
            blogPosts[post.slug] = post;
        });

        return data.posts;
    } catch (error) {
        console.error('Error loading blog index:', error);
        throw error;
    }
}

// Load actual markdown file
async function loadMarkdownFile(slug) {
    try {
        if (!blogPosts[slug]) {
            throw new Error('Blog post not found');
        }

        const post = blogPosts[slug];
        const response = await fetch(`./blog_posts/${post.file}`);

        if (!response.ok) {
            throw new Error(`Failed to load blog post: ${response.status} ${response.statusText} | ${post.file}`);
        }

        const markdown = await response.text();

        return {
            ...post,
            content: markdown
        };
    } catch (error) {
        console.error('Error loading markdown file:', error);
        throw error;
    }
}

// Function to render blog post (updated for new structure)
function renderBlogPost(postData) {
    const container = document.getElementById('blogContainer');

    // Skip over the title in the markdown so I can insert some meta data
    const contentWithoutTitle = postData.content.replace(/^#\s+.+$/m, '');
    const htmlContent = marked.parse(contentWithoutTitle);

    // Create blog post HTML structure
    container.innerHTML = `
        <article class="blog-container">
            <div class="blog-content">
                  <h1 style="color: var(--lm-dark-grey); margin-top: 0; margin-bottom: 0.5rem; font-size: 2.3rem;">${postData.title}</h1>
                  <div class="blog-date">${postData.date}</div>
                  <div class="blog-tags">
                    ${postData.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                  </div>                
                  ${htmlContent}
            </div>
        </article>
    `;
}

// NEW: Function to extract excerpt from markdown content
function extractExcerpt(content, maxLength = 150) {
    // Remove markdown syntax and get plain text
    const plainText = content
        .replace(/^#\s+.+$/m, '') // Remove title
        .replace(/[#*`_~]/g, '') // Remove markdown formatting
        .replace(/\n+/g, ' ') // Replace newlines with spaces
        .trim();

    if (plainText.length <= maxLength) {
        return plainText;
    }

    // Find the last complete word within the limit
    const truncated = plainText.substring(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(' ');

    return truncated.substring(0, lastSpaceIndex) + '...';
}

// NEW: Function to render recent posts
async function renderRecentPosts(limit = 3) {
    const container = document.getElementById('recentPostsContainer');

    if (!container) {
        console.error('Recent posts container not found');
        return;
    }

    try {
        // Show loading state
        container.innerHTML = '<div class="loading">Loading recent posts...</div>';

        // Load blog index if not already loaded
        if (Object.keys(blogPosts).length === 0) {
            await loadBlogIndex();
        }

        // Get all posts and sort by date
        const posts = Object.values(blogPosts);
        const sortedPosts = posts.sort((a, b) => {
            return new Date(b.dateSort) - new Date(a.dateSort);
        });

        // Get the most recent posts
        const recentPosts = sortedPosts.slice(0, limit);

        // Load content for each recent post to extract excerpts
        const postsWithExcerpts = await Promise.all(
            recentPosts.map(async (post) => {
                try {
                    const postData = await loadMarkdownFile(post.slug);
                    const excerpt = post.excerpt || extractExcerpt(postData.content);
                    return { ...post, excerpt };
                } catch (error) {
                    console.error(`Error loading post ${post.slug}:`, error);
                    return { ...post, excerpt: 'Excerpt not available.' };
                }
            })
        );

        // Render the recent posts
        container.innerHTML = `
            <h2>Recent Posts</h2>
            ${postsWithExcerpts.map(post => `
                <div class="blog-item">
                    <h3>${post.title}</h3>
                    <div class="blog-excerpt">${post.excerpt}</div>
                    <div class="blog-meta">
                        <span class="blog-date">${post.date}</span>
                        <a href="?post=${post.slug}" class="blog-read-more">Read More</a>
                    </div>
                </div>
            `).join('')}
        `;

    } catch (error) {
        console.error('Error rendering recent posts:', error);
        container.innerHTML = '<div class="error">Failed to load recent posts</div>';
    }
}

// Function to show loading state
function showLoading() {
    document.getElementById('blogContainer').innerHTML =
        '<div class="loading">Loading blog post...</div>';
}

// Function to show error
function showError(message) {
    document.getElementById('blogContainer').innerHTML =
        `<div class="error">Error: ${message}</div>`;
}

// Function to load the most recent blog post
async function loadMostRecentPost() {
    try {
        const posts = await loadBlogIndex();

        // Sort posts by date to find the most recent
        const sortedPosts = posts.sort((a, b) => {
            return new Date(b.dateSort) - new Date(a.dateSort);
        });

        if (sortedPosts.length > 0) {
            const mostRecentSlug = sortedPosts[0].slug;
            await loadPostBySlug(mostRecentSlug);
        } else {
            showError('No blog posts found');
        }
    } catch (error) {
        showError('Failed to load blog posts');
    }
}

// Load post based on URL slug (for direct linking)
async function loadPostBySlug(slug) {
    if (!slug) return;

    showLoading();

    try {
        const postData = await loadMarkdownFile(slug);
        renderBlogPost(postData);
    } catch (error) {
        showError(error.message);
    }
}

// Load specific post by slug
async function loadPost(slug) {
    showLoading();

    try {
        // Load index first if not already loaded
        if (Object.keys(blogPosts).length === 0) {
            await loadBlogIndex();
        }

        const postData = await loadMarkdownFile(slug);
        renderBlogPost(postData);
    } catch (error) {
        showError(error.message);
    }
}

// Initialize - check URL for slug parameter or load most recent
window.addEventListener('load', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('post');

    // Always load recent posts first if container exists
    await renderRecentPosts();

    // Then handle individual post loading if blogContainer exists
    const blogContainer = document.getElementById('blogContainer');
    if (blogContainer) {
        if (slug) {
            await loadPostBySlug(slug);
        } else {
            await loadMostRecentPost();
        }
    }
});

// Export functions for global use
window.loadPost = loadPost;
window.loadMostRecentPost = loadMostRecentPost;
window.renderRecentPosts = renderRecentPosts;