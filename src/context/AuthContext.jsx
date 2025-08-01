// import { createContext, useEffect, useState } from "react"
// import { auth } from "../config/firebase"
// import { useContext } from "react"
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"

// const AuthContext = createContext()

// const useAuth = () => useContext(AuthContext)

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState()

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user)
//     })

//     return () => unsubscribe()
//   }, [])

//   //login
//   const login = (email, password) =>
//     signInWithEmailAndPassword(auth, email, password)

//   //register
//   const register = (email, password) =>
//     createUserWithEmailAndPassword(auth, email, password)

//   //logout
//   const logout = () => signOut(auth)

//   return (
//     <AuthContext.Provider value={{ login, register, user, logout }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }
// export { AuthContext, AuthProvider, useAuth }

import { createContext, useEffect, useState, useContext } from "react"
import { auth } from "../config/firebase"
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  updateProfile 
} from "firebase/auth"

// (Opcional) importar Firestore si querés guardar los datos aparte, preferi no ponerlo
// import { db } from "../config/firebase"
// import { doc, setDoc } from "firebase/firestore"

const AuthContext = createContext()
const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [])

  // login
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  // register (modificado)
  const register = async (email, password, nombre, apellido) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // Actualizar el perfil con nombre completo
    await updateProfile(user, {
      displayName: `${nombre} ${apellido}`
    })

    // (Opcional) Guardar datos adicionales en Firestore, preferi no ponerlo
    /*
    await setDoc(doc(db, "usuarios", user.uid), {
      nombre,
      apellido,
      email: user.email,
      uid: user.uid
    })
    */

    return userCredential
  }

  // logout
  const logout = () => signOut(auth)

  return (
    <AuthContext.Provider value={{ login, register, user, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// export { AuthProvider, useAuth }
export { AuthContext, AuthProvider, useAuth }
