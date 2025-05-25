class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    this.innerHTML = `
      <style>
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 10px 10px 0px;
            background-color: white;
          }

          .logo-name {
            font-size: 40px;
            margin: 0;
          }

        .main-navigation {
          align-items: center;
          background-color: white;
          display: block;
          height: 50px;
          width: 100%;
          margin-top: 5%;
        }
        .main-navigation li {
          list-style-type: none;
          float: right;
        }
        .main-navigation a {
          color: #808185;
          width: 125px;
          line-height: 50px;
          display: block;
          text-decoration: none;
          text-transform: uppercase;
          text-align: center;
        }
        .main-navigation a.active {
          background: white;
          color: #0f75bd;
          border: 2px solid #0f75bd;
          border-radius: 0px;
        }
        .main-navigation a:hover:not(.active) {
          background: white;
          color: #0f75bd;
          transition: .1s color;
        }
      </style>
      <header>
        <h1 class="logo-name">Mia McGuire</h1>
        <nav>
          <ul class="main-navigation">
            <li><a href="code.html" class="${currentPage === 'code.html' ? 'active' : ''}">Projects</a></li>
            <li><a href="cv_resume.html" class="${currentPage === 'cv_resume.html' ? 'active' : ''}">CV</a></li>
            <li><a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);

