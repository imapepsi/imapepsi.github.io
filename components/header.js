class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `

      <style>
        .logo-name {
            font-size: 50px;
            text-align: left;
            display: inline;
        }
        .main-navigation {
            position: center;
            background-color: white;
            display: block;
            height: 50px;
            width:100%;
            margin-top: 1%;
            margin-left: 0;
            margin-right: 0;
        }
        
        .main-navigation li {
            list-style-type: none;
            float: right;
            margin-left: 0;
            margin-right: 0;
        }
        
        .main-navigation a {
            color: #808185;
            width: 125px;
            line-height: 50px;
            display: inherit;
            text-decoration: none; /* Removes Underline */
            text-transform: uppercase;
            text-align: center;
            margin-left: 0;
            margin-right: 0;
        }
        
        .main-navigation a.active {
            background-color: #0f75bd;
            color: white;
        }
        
        .main-navigation a:hover:not(.active) { /* Hover if not active */
            background: #808185;
            color: white;
            transition: .2s color;
        }
      </style>
      <header>
        <h1 class="logo-name">Mia McGuire</h1>
        <nav>
          <ul class="main-navigation">
            <li><a href="experience.html">Resume</a></li>
            <li><a href="code.html">Code</a></li>
            <li><a href="Animation.html">Animation</a></li>
            <li><a class="active" href="index.html">Home</a></li>
        </ul>
        </nav>
      </header>
    `;
    }
}

customElements.define('header-component', Header);