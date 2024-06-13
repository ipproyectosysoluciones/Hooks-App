import { Routes, Route, Navigate } from 'react-router-dom'; // Importamos componentes necesarios de react-router-dom para la navegación
import { AboutPage, HomePage, LoginPage, Navbar } from './'; // Importamos los componentes de nuestras páginas y la barra de navegación
import { UserProvider } from './context'; // Importamos el contexto de usuario


// Componente principal de la aplicación
export const MainApp = () => {
  // Proveedor de contexto para compartir el estado de usuario en toda la aplicación
  return (
    <UserProvider>
      {/* <h1>MainApp</h1> */}
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link> */}
      {/* Componente de barra de navegación */}
      <Navbar />
      <hr />

      {/* Configuración de rutas */}
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={ <HomePage /> } />
        {/* Ruta para la página de login */}
        <Route path="login" element={ <LoginPage /> } />
        {/* Ruta para la página about */}
        <Route path="about" element={ <AboutPage /> } />

        {/* Ruta comodín, redirige a /about si la ruta no coincide con ninguna definida */}
        {/* <Route path="/*" element={ <LoginPage /> } /> */}
        <Route path="/*" element={ <Navigate to="/about" /> } />
      </Routes>
    </UserProvider>
  );
};
