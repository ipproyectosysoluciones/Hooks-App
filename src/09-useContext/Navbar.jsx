import { Link, NavLink } from 'react-router-dom'; // Importamos Link y NavLink desde react-router-dom para la navegación


// Componente Navbar para la barra de navegación
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      {/* Configuración de la barra de navegación con clases de Bootstrap */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          useContext {/* Enlace de la marca o título, redirige a la página principal */}
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Enlace de navegación para la página principal */}
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              to="/"
            >
              Home {/* Texto del enlace */}
            </NavLink>

            {/* Enlace de navegación para la página about */}
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              to="/about"
            >
              About {/* Texto del enlace */}
            </NavLink>

            {/* Enlace de navegación para la página de login */}
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              to="/login"
            >
              Login {/* Texto del enlace */}
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
