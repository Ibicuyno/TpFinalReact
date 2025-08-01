import { Link } from "react-router-dom"
import "./Header.css"
import { useAuth } from "../../context/AuthContext"
import logo from "../../assets/logo.png" 

const Header = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Tienda Ibicuyna" />
        </Link>
      </div>

      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          {
            user && <>
              <li><Link to="/admin">Panel de administrador</Link></li>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </>
          }
          {
            !user && <>
              <li><Link to="/registro">Registrate</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header

