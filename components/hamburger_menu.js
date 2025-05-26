/**
 * Hamburger Menu Module
 * Handles responsive navigation menu functionality
 */

const HamburgerMenu = {
    /**
     * Initialize the hamburger menu
     */
    init() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');

        // Check if required elements exist
        if (!this.hamburger || !this.navMenu) {
            console.warn('Hamburger menu elements not found');
            return;
        }

        this.bindEvents();
    },

    /**
     * Bind all event listeners
     */
    bindEvents() {
        // Toggle mobile menu
        this.hamburger.addEventListener('click', this.toggleMenu.bind(this));

        // Close menu when clicking on navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', this.closeMenu.bind(this));
        });

        // Close menu when clicking outside
        document.addEventListener('click', this.handleOutsideClick.bind(this));

        // Handle window resize
        window.addEventListener('resize', this.handleResize.bind(this));
    },

    /**
     * Toggle the mobile menu open/closed
     */
    toggleMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    },

    /**
     * Close the mobile menu
     */
    closeMenu() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
    },

    /**
     * Handle clicks outside the menu
     * @param {Event} e - Click event
     */
    handleOutsideClick(e) {
        if (!this.hamburger.contains(e.target) && !this.navMenu.contains(e.target)) {
            this.closeMenu();
        }
    },

    /**
     * Handle window resize events
     */
    handleResize() {
        // Close menu when resizing to desktop view
        if (window.innerWidth > 768) {
            this.closeMenu();
        }
    },

    /**
     * Check if menu is currently open
     * @returns {boolean}
     */
    isMenuOpen() {
        return this.navMenu.classList.contains('active');
    },

    /**
     * Destroy the hamburger menu (remove event listeners)
     */
    destroy() {
        if (this.hamburger) {
            this.hamburger.removeEventListener('click', this.toggleMenu);
        }

        this.navLinks.forEach(link => {
            link.removeEventListener('click', this.closeMenu);
        });

        document.removeEventListener('click', this.handleOutsideClick);
        window.removeEventListener('resize', this.handleResize);
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    HamburgerMenu.init();
});

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HamburgerMenu;
}