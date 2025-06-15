let blogPostList = [];
let currentYear = 2025;

// Load blog posts from JSON file
async function loadBlogPosts() {
    try {
        // Use the same path as your blogpost-loader.js
        const response = await fetch('./data/blog-index.json');
        const data = await response.json();

        // Transform the JSON data to match our expected format
        blogPostList = data.posts.map((post, index) => ({
            id: index + 1,
            title: post.title,
            date: post.date,
            dateSort: post.dateSort,
            year: parseInt(post.dateSort.split('-')[0]), //new Date(post.dateSort).getFullYear(),
            category: post.tags[0] || 'General',
            excerpt: post.excerpt,
            author: post.author,
            slug: post.slug,
            file: post.file,
            tags: post.tags,
            featured: index < 3
        }));

        // Sort posts by date (newest first)
        blogPostList.sort((a, b) => new Date(b.dateSort) - new Date(a.dateSort));

        // Update current year to the most recent post's year
        if (blogPostList.length > 0) {
            currentYear = blogPostList[0].year;

            // Update the active year selector
            document.querySelectorAll('.year-selector').forEach(selector => {
                selector.classList.remove('active');
                if (selector.textContent == currentYear) {
                    selector.classList.add('active');
                }
            });
        }

        // Render blog posts in the time machine
        renderBlogPosts();

    } catch (error) {
        console.error('Error loading blog posts:', error);
        document.getElementById('blog-posts').innerHTML = '<div class="blog-post"><h3>Error loading posts</h3><p>Please check the console for details.</p></div>';
        blogPostList = [];
    }
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Update navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }

    // Load blog posts if blog section is shown
    if (sectionName === 'blog' && blogPostList.length === 0) {
        loadBlogPosts();
    }
}

function filterByYear(year) {
    currentYear = year;

    // Update year selector active state
    document.querySelectorAll('.year-selector').forEach(selector => {
        selector.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }

    renderBlogPosts();
}

function renderBlogPosts() {
    const container = document.getElementById('blog-posts');
    if (!container) return;

    let filteredPosts = blogPostList;

    if (currentYear !== 'all') {
        filteredPosts = blogPostList.filter(post => post.year === currentYear);
    }

    if (filteredPosts.length === 0) {
        container.innerHTML = '<div class="blog-post"><h3>No posts found for this year</h3><p>Try selecting a different year or "All" to see more posts.</p></div>';
        return;
    }

    container.innerHTML = filteredPosts.map(post => `
        <div class="blog-post" onclick="loadPostFromTimeMachine('${post.slug}')" style="cursor: pointer; transition: transform 0.2s;">
            <h3>${post.title}</h3>
            <div class="blog-meta">
                <span>${post.date}</span>
            </div>
            <p>${post.excerpt}</p>
            ${post.tags && post.tags.length > 1 ? `
                <div class="blog-tags">
                    ${post.tags.slice(1).map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                </div>` 
                : ''
            }
        </div>
    `).join('');

    // Add hover effects
    container.querySelectorAll('.blog-post').forEach(post => {
        post.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        post.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function renderTopPosts() {
    const container = document.getElementById('top-posts');
    if (!container) return;

    const topPosts = blogPostList.filter(post => post.featured).slice(0, 3);

    container.innerHTML = topPosts.map((post, index) => `
        <div class="recent-post-item" onclick="loadPostFromTimeMachine('${post.slug}')" style="cursor: pointer;">
            <h4>${index + 1}. ${post.title}</h4>
            <div class="date">${post.date} • ${post.category}</div>
        </div>
    `).join('');
}

// Function to load a post using your existing loader system
function loadPostFromTimeMachine(slug) {
    console.log('Loading post from time machine:', slug);

    // Check if the loadPost function exists (from your blogpost-loader.js)
    if (typeof window.loadPost === 'function') {
        // Use your existing post loader
        window.loadPost(slug);

        // Scroll to the blog container to show the loaded post
        const blogContainer = document.getElementById('blogContainer');
        if (blogContainer) {
            blogContainer.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        // Fallback: redirect to URL with post parameter
        const currentUrl = new URL(window.location);
        currentUrl.searchParams.set('post', slug);
        window.location.href = currentUrl.toString();
    }
}

// Legacy function for backward compatibility
function showPostDetails(postId) {
    const post = blogPostList.find(p => p.id === postId);
    if (post) {
        loadPostFromTimeMachine(post.slug);
    }
}

// Add smooth scrolling and animation effects
document.addEventListener('DOMContentLoaded', function() {
    // Load blog posts from JSON file when page loads
    loadBlogPosts();

    // Add pulse animation to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.classList.add('pulse');
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Make functions available globally for onclick handlers
window.filterByYear = filterByYear;
window.loadPostFromTimeMachine = loadPostFromTimeMachine;
window.showPostDetails = showPostDetails;