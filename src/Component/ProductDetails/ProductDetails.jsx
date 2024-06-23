import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { items } from '../Data';
import './ProductDetails.css'
import Products from '../Products/Products';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useSearchParams } from 'react-router-dom';

const ProductDetails = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const [relatedProduct, setRelatedProduct] = useState([])
 

  useEffect(() => {
    const findproduct = items.filter((product) => product.id == id)
    setProduct(findproduct[0]);
   

    const relatedProduct = items.filter((pro) => pro.category === product.category)
    setRelatedProduct(relatedProduct)
  }, [id, product.category])

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id, price, title, description, imgSrc
    }
    setCart([...cart, obj])
    toast.success('Your item added on cart', {
      position: "top-center",
      autoClose: 1300,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
  }
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />
      <div className='container '>
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="Details">
          <h2 className="card-title">{product.title}</h2>
          <p className="card-text">{product.description}</p>
          <button className='btn btn-primary mx-3'>{product.price} ₹ </button>
          <button className='btn btn-warning' onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}>Add To Cart</button>
        </div>

      </div>

      {/* relative products */}
      <div className='relative'>
        <h1 className='text-center'>Relative Products</h1>
        <Products items={relatedProduct} cart={cart} setCart={setCart} />
      </div>
    </>
  )
}

export default ProductDetails
