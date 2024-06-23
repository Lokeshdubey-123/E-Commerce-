import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { items } from '../Data';
import Products from '../Products/Products';


const SearchItems = ({ cart, setCart }) => {
  const { term } = useParams();
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) => p.title.toLowerCase().includes(term.toLowerCase()));
      setFilteredData(data)
    }
    filteredData();
  }, [term])

  return (
    <>
      <Products items={filteredData} cart={cart} setCart={setCart} />
    </>
  )
}

export default SearchItems
