import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { items } from '../Data'
import { FaCartArrowDown } from "react-icons/fa6";

const Navbar = ({ setData, cart }) => {
  const location = useLocation();

  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("")

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchItem}`)
    setSearchItem('')
  }

  const filterItem = (category) => {
    const element = items.filter((product) => product.category === category)
    setData(element)
  }

  const filterBYPrice = (price) => {
    const element = items.filter((product) => product.price >= price)
    setData(element)
  }
  return (
    <>
      <nav>
        <header>
          <div className="nav-bar">
            <Link to={'/'}> <div className="logo">M-Cart</div></Link>

            <form onSubmit={handleSearch} className="search-bar"><input value={searchItem} onChange={(e) => setSearchItem(e.target.value)} type="text" placeholder='Search here' /></form>

            <Link to={'/cart'}><div className="cart">
              <button type="button" class="btn btn-primary">
                <FaCartArrowDown style={{ fontSize: '1.5rem' }} /> <span class="badge badge-light ">{cart.length}</span>
              </button></div></Link>
          </div>
          {
            location.pathname === '/' && (
              <div className="nav-bar-2">
                <div className="item">Filter by {"->"}</div>
                <div className="item" onClick={() => setData(items)}>No Filter</div>
                <div className="item" onClick={() => filterItem('mobiles')}>Mobiles</div>
                <div className="item" onClick={() => filterItem('laptops')}>Laptop</div>
                <div className="item" onClick={() => filterItem('tablets')}>Tablets</div>
                <div className="item" onClick={() => filterBYPrice('29999')}>{">="}29999</div>
                <div className="item" onClick={() => filterBYPrice('49999')}>{">="}49999</div>
                <div className="item" onClick={() => filterBYPrice('69999')}>{">="}69999</div>
                <div className="item" onClick={() => filterBYPrice('89999')}>{">="}89999</div>
              </div>
            )
          }


        </header>
      </nav>
    </>
  )
}

export default Navbar
