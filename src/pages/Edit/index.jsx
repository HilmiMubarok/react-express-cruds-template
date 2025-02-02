import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Input from "../../components/Input";

const Edit = () => {
  const params = useParams()
  const [product, setProduct] = useState([])
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    stock: '',
    status: false
  })

  useEffect(() => {
    axios.get('https://hilmi-express-mongo.herokuapp.com/api/products/' + params.id)
      .then(res => {
        const product = res.data
        setProduct(product)
      })
      .catch(err => console.log(err))
  }, [params.id])

  const handleSubmit = (e) => {
    e.preventDefault()
    let name, price, stock, status
    newProduct.name === '' ? name = product.name : name = newProduct.name
    newProduct.price === '' ? price = product.price : price = newProduct.price
    newProduct.stock === '' ? stock = product.stock : stock = newProduct.stock
    newProduct.status !== false ? status = true : status = false
    const data = new URLSearchParams()
    data.append('name', name)
    data.append('price', price)
    data.append('stock', stock)
    data.append('status', status)

    axios.put('https://hilmi-express-mongo.herokuapp.com/api/products/' + params.id, data)
      .then(res => alert("Product Updated"))
      .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <Input name="name" onChange={handleChange} type="text" placeholder={product.name} label="Nama" />
          <Input name="price" onChange={handleChange} type="number" placeholder={product.price} label="Harga" />
          <Input name="stock" onChange={handleChange} type="number" placeholder={product.stock} label="Stock" />
          <Input name="status" onChange={handleChange} type="checkbox" label="Active" />
          <button type="submit" onClick={handleSubmit} className="btn btn-primary">Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default Edit;