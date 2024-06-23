import React from 'react'
import './Products.css'
// import { items } from '../Data'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = ({ items, cart, setCart }) => {

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
            <div className='container my-5'>
                <div className="row">
                    {
                        items.map((products) => {
                            return (
                                <div key={products.id} className="col-lg-4 col-md-6 my-3 text-center">

                                    <div className="card" style={{ width: '18rem' }}>
                                        <Link to={`/products/${products.id}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <img src={products.imgSrc} className="card-img-top" alt="..." /></Link>
                                        <div className="card-body">
                                            <h5 className="card-title">{products.title}</h5>
                                            <p className="card-text">{products.description}</p>
                                            <button className='btn btn-primary mx-3'>{products.price} ₹ </button>
                                            <button className='btn btn-warning' onClick={() => addToCart(products.id, products.price, products.title, products.description, products.imgSrc)}>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }</div>

            </div>

        </>
    )
}

export default Products
