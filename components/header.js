class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    this.innerHTML = `
      <header class="header">
        <h1 class="logo-name">Mia McGuire</h1>
        <nav>
          <ul class="main-navigation">
            <li><a href="code.html" class="${currentPage === 'code.html' ? 'active' : ''}">Projects</a></li>
            <li><a href="cv_resume.html" class="${currentPage === 'cv_resume.html' ? 'active' : ''}">CV</a></li>
            <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
          </ul>
        </nav>
      </header>
      <br>
    `;
  }
}

customElements.define('header-component', Header);

