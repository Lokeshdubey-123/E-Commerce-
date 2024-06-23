import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ cart, setCart }) => {
  return (
    <>
      {
        cart.length == 0 ? (
          <div className="text-center">
            <h1>Your card is Empty</h1>
            <Link to={'/'} className='btn btn-warning'>Continue Shoping</Link>
          </div>
        ) :
          cart.map((products) => {
            return (
              <>
                <div className="container  my-5 text-center" style={{ width: '30%' }} >

                  <div key={products.id} className="card " style={{ width: '800px' }}>
                    <img src={products.imgSrc} className='card-img-top' style={{ width: '200px', marginLeft: '110px' }} alt=".." />
                    <div className="card-body">
                      <h5 className="card-title">{products.title}</h5>
                      <p className="card-text">{products.description}</p>
                      <button className='btn btn-primary mx-3'>{products.price} ₹ </button>
                      <button className='btn btn-warning'>Buy Now</button>
                    </div>
                  </div>
                </div>
                {/* <button className='btn btn-warning'>Clear Cart</button> */}
              </>
            )
          })}
      {
        cart.length != 0 && (<div className="container text-center my-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          {/* <button></button> */}
          <button onClick={() => setCart('')} className='btn btn-danger'>Clear Cart</button>
        </div>)
      }

    </>
  )
}

export default Cart;
