// import { useState } from "react"
// import Layout from "../components/Layout/Layout"
// import "../styles/Register.css"
// import { createUserWithEmailAndPassword } from "firebase/auth"
// import { auth } from "../config/firebase"
// import { useNavigate } from "react-router-dom"
// import { useAuth } from "../context/AuthContext"

// const Register = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState(null)
//   const [message, setMessage] = useState(null)

//   const navigate = useNavigate()
//   const { register } = useAuth()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError(null)
//     setMessage(null)

//     if (!email || !password) {
//       setError("Por favor complete todos los campos.")
//       return
//     }

//     // Intento guardar o registrar un usuario.
//     try {
//       await register(email, password)
//       setMessage("Usuario registrado con éxito...")
//       setEmail("")
//       setPassword("")
//       setTimeout(() => {
//         setMessage("Redirigiendo al Home...")
//       }, 2000)
//       setTimeout(() => {
//         navigate("/")
//       }, 3000)
//     } catch (error) {
//       setError(error.message)
//     }
//   }

//   return (
//     <Layout>
//       <section id="register-section">
//         <h1>Registrate</h1>
//         <form onSubmit={handleSubmit} >
//           <label htmlFor="email">Correo electrónico:</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             onChange={(e) =>
//               setEmail(e.target.value)}
//           />

//           <label htmlFor="password">Contraseña:</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button>Registrarme</button>
//         </form>
//         <h5 className="error-message">{error}</h5>
//         <h5 className="success-message">{message}</h5>
//       </section>
//     </Layout >
//   )
// }

// export default Register





// import { useState } from "react"
// import Layout from "../components/Layout/Layout"
// import "../styles/Register.css"
// import { useNavigate } from "react-router-dom"
// import { useAuth } from "../context/AuthContext"

// const Register = () => {
//   const [nombre, setNombre] = useState("")
//   const [apellido, setApellido] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState(null)
//   const [message, setMessage] = useState(null)

//   const navigate = useNavigate()
//   const { register } = useAuth()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError(null)
//     setMessage(null)

//     if (!nombre || !apellido || !email || !password) {
//       setError("Por favor complete todos los campos.")
//       return
//     }

//     try {
//       await register(email, password, nombre, apellido)
//       setMessage("Usuario registrado con éxito...")
//       setNombre("")
//       setApellido("")
//       setEmail("")
//       setPassword("")
//       setTimeout(() => {
//         setMessage("Redirigiendo al Home...")
//       }, 2000)
//       setTimeout(() => {
//         navigate("/")
//       }, 3000)
//     } catch (error) {
//       setError(error.message)
//     }
//   }

//   return (
//     <Layout>
//       <form onSubmit={handleSubmit} className="register-form">
//         <h2>Registro</h2>

//         <input
//           type="text"
//           placeholder="Nombre"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Apellido"
//           value={apellido}
//           onChange={(e) => setApellido(e.target.value)}
//         />

//         <input
//           type="email"
//           placeholder="Correo electrónico"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Contraseña"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit">Registrarse</button>

//         {error && <p className="error">{error}</p>}
//         {message && <p className="message">{message}</p>}
//       </form>
//     </Layout>
//   )
// }

// export default Register

import { useState } from "react"
import Layout from "../components/Layout/Layout"
import "../styles/Register.css"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Register = () => {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)

  const navigate = useNavigate()
  const { register } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setMessage(null)

    if (!nombre || !apellido || !email || !password) {
      setError("Por favor complete todos los campos.")
      return
    }

    try {
      await register(email, password, nombre, apellido)
      setMessage("Usuario registrado con éxito...")
      setNombre("")
      setApellido("")
      setEmail("")
      setPassword("")
      setTimeout(() => {
        setMessage("Redirigiendo al Home...")
      }, 2000)
      setTimeout(() => {
        navigate("/")
      }, 3000)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Layout>
      <section id="register-section">
        <h1>Registro</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            // placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <label htmlFor="apellido">Apellido</label>
          <input
            id="apellido"
            type="text"
            // placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />

          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            // placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            // placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Registrarse</button>

          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}
        </form>
      </section>
    </Layout>
  )
}

export default Register

