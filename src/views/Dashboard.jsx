import { use, useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"
import "../styles/Dashboard.css"
import { db } from "../config/firebase"
import { collection, addDoc, doc } from "firebase/firestore"
import { Link, useNavigate } from "react-router-dom"

const Dashboard = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [sku, setSku] = useState("")
  const [error, setError] = useState(null)
  const [isDisabled, setIsDisabled] = useState(true)
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)

  const navigate = useNavigate()

  const productosRef = collection(db, "productos")

  const createProduct = async (productData) => {
    const createdAt = Date.now()
    const updatedAt = Date.now()

    console.log(createdAt, updatedAt)

    try {
      const productRef = await addDoc(productosRef, { createdAt, updatedAt, ...productData })
      return productRef
    } catch (error) {
      console.log("Error al cargar el producto!")
    }
  }

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handlePrice = (event) => {
    setPrice(Number(event.target.value))
  }

  const handleDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleImage = (event) => {
    setImage(event.target.value)
  }

  const handleSku = (event) => {
    setSku(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError("")
    setSuccess(false)

    if (!name || !price || !description || !image || !sku) {
      setError("Por favor complete todos los campos.")
      return
    }

    if (name.length < 2) {
      setError("El nombre debe tener por lo menos 2 caracteres.")
      return
    }

    if (price < 0) {
      setError("El precio debe ser mayor a 0.")
      return
    }

    const newProduct = { name, price, description, image, sku }
    // Guardo en la base de datos el nuevo producto
    try {
      await createProduct(newProduct)
      setMessage("Producto creado con éxito.")
      setName("")
      setPrice(0)
      setDescription("")
      setImage ("")
      setSku("")
      // validar envio con éxito para mostrar link de redirección al home
      setSuccess(true)

      // redirigiendo al usuario una vez registrado el producto con éxito
      // setTimeout(() => {
      //   setMessage("")
      //   navigate("/")
      // }, 4000)
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    if (name && price && description && image && sku) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [name, price, description, image, sku])

  return (
    <Layout>
      <section id="admin-section">
        <h1>Panel de administración</h1>
        <p>Alta de productos.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre del producto:</label>
          <input type="text" name="name" id="name" onChange={handleName} value={name} />

          <label htmlFor="price">Precio del producto:</label>
          <input type="number" name="price" id="price" onChange={handlePrice} value={price} />

          <label htmlFor="description">Descripción del producto:</label>
          <textarea name="description" id="description" onChange={handleDescription} value={description}></textarea>

          {/* <label htmlFor="image">Imagen del producto:</label>
          <textarea name="image" id="image" onChange={handleImage} value={image}></textarea> */}

          <label htmlFor="image">Imagen del producto (URL):</label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={handleImage}
            value={image}
          />

          {image && (
            <div style={{ margin: "10px 0" }}>
              <p>Vista previa de la imagen:</p>
              <img
                src={image}
                alt="Vista previa"
                style={{ maxWidth: "300px", borderRadius: "8px", border: "1px solid #ccc" }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  console.warn('No se pudo cargar la imagen.');
                }}
              />
            </div>
          )}

          <label htmlFor="sku">SKU:</label>
          <textarea name="sku" id="sku" onChange={handleSku} value={sku}></textarea>

          <button disabled={isDisabled}>Agregar producto</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {message && <p style={{ color: "green" }}>{message}</p>}
          {success && <Link to={"/"}>Ir a home</Link>}
        </form>
      </section>
    </Layout>
  )
}

export default Dashboard