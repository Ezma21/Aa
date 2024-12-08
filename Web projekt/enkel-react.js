/ Här är en React-komponent
function Header() {
    return (
      <header>
        <h1>Välkommen till min React-sida</h1>
        <nav>
          <ul>
            <li>
              <a href="about.html">Om mig</a>
            </li>
            <li>
              <a href="projects.html">Projekt</a>
            </li>
            <li>
              <a href="contact.html">Kontakt</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  // Rendera komponenten till "my-component"-elementet i HTML
  ReactDOM.render(<Header />, document.getElementById("my-component"));
  
