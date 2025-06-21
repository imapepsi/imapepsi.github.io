class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    this.innerHTML = `
      <nav class="navbar">
          <div class="nav-container">
              <a href="index.html" class="nav-logo">Mia McGuire</a>

              <ul class="nav-menu">
                  <li><a href="index.html" class="nav-link ${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
                  <li><a href="cv-resume.html" class="nav-link ${currentPage === 'cv-resume.html' ? 'active' : ''}">CV/Resume</a></li>
                  <li><a href="my-projects.html" class="nav-link ${currentPage === 'my-projects.html' ? 'active' : ''}">Projects</a></li>
                  <li><a href="contact.html" class="nav-link ${currentPage === 'contact.html' ? 'active' : ''}">Contact</a></li>
<!--                  <li><a href="blog.html" class="nav-link ${currentPage === 'blog.html' ? 'active' : ''}">Blog</a></li>-->
              </ul>

              <div class="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>
      </nav>
    `;
  }
}

customElements.define('navigation-component', Header);

//<header class="header">
//        <h1 class="logo-name">Mia McGuire</h1>
//        <nav>
//          <ul class="main-navigation">
//            <li><a href="code.html" class="${currentPage === 'code.html' ? 'active' : ''}">Projects</a></li>
//            <li><a href="cv-resume.html" class="${currentPage === 'cv-resume.html' ? 'active' : ''}">CV</a></li>
//            <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
//          </ul>
//        </nav>
//      </header>