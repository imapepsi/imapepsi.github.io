// import { marked } from 'https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js';

// Real blog post loader - replaces mock data
let blogPosts = {};

// Load blog posts index
async function loadBlogIndex() {
    try {
        const response = await fetch('./data/blog-index.json'); // Adjust path as needed

        // console.log('Response status:', response.status);

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

        // Return post data with loaded content
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

    // Parse markdown to HTML
    // const htmlContent = marked.parse(postData.content);

    // Skip over the title in the markdown so I can insert some meta data
    const contentWithoutTitle = postData.content.replace(/^#\s+.+$/m, '');
    const htmlContent = marked.parse(contentWithoutTitle);

    // Create blog post HTML structure
    container.innerHTML = `
        <article class="blog-container">
            <!--<div class="blog-meta">-->
            <!--    <div class="blog-date">${postData.date}</div>-->
            <!--    <br>-->
            <!--    ${postData.tags ? `-->

            <!--    ` : ''}-->
            <!--</div>-->
            <div class="blog-content">
                  <h1 style="color: black; margin-top: 0; margin-bottom: 0.5rem; font-size: 2.5rem;">${postData.title}</h1>
                  <div class="blog-date">${postData.date}</div>
                  <div class="blog-tags">
                    ${postData.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                  </div>                
                  ${htmlContent}
                
            </div>
        </article>
    `;
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

    if (slug) {
        await loadPostBySlug(slug);
    } else {
        await loadMostRecentPost();
    }
});

// Export functions for global use
window.loadPost = loadPost;
window.loadMostRecentPost = loadMostRecentPost;