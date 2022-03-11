import React, { useState } from 'react'

import { useMmodalStore, useProductStore } from '../../Store/store'

//Styles
import './menu.css'

//Components
import Resume from '../Resume/Resume'

//MUI
import SegmentIcon from '@mui/icons-material/Segment'
import SearchIcon from '@mui/icons-material/Search'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import RoomServiceIcon from '@mui/icons-material/RoomService'
import AddIcon from '@mui/icons-material/Add'

const Menu = () => {
  const toggleResume = useMmodalStore((state) => state.toggleResume)
  const toggleMenu = useMmodalStore((state) => state.toggleMenu)
  const addToCart = useProductStore((state) => state.addToCart)
  const cart = useProductStore((state) => state.cart)
  const products = useProductStore((state) => state.products)
  const [filter, setFilter] = useState(products)

  const filterCategory = (c) => {
    const updateList = products.filter((x) => x.category === c)

    setFilter(updateList)
    console.log(filter)
  }

  const add = (item) => {
    addToCart(item)
  }

  return (
    <div className="menu-container">
      <header className="menu-header">
        <SegmentIcon color="disabled" onClick={toggleMenu} />
        <SearchIcon color="disabled" />
      </header>

      <div className="category-container">
        <h1>Categorias</h1>
        <p>Elige una de nuestras deliciosas pizzas</p>
        <div className="category-icons">
          <div className="pizza-container">
            <LocalPizzaIcon
              className="pizza"
              onClick={() => filterCategory('pizza')}
            />
          </div>
          <div className="snacks-container">
            <FastfoodIcon
              className="snacks"
              onClick={() => filterCategory('snacks')}
            />
          </div>
        </div>
      </div>

      <div className="products-container">
        {filter.map((product, idx) => (
          <div key={idx} className="product-container">
            <img src={product.scr} alt={product.alt} />

            <div className="product-info">
              <p>{product.desc}</p>
              <p className="price">$ {product.price}.00</p>
            </div>

            <div className="add-container">
              <AddIcon color="disabled" onClick={() => add(product)} />
            </div>
          </div>
        ))}
      </div>

      <div className="resume-container" onClick={toggleResume}>
        <div className="resume">
          <p>{cart.length} Items</p>
          <p>$1550.00</p>
        </div>

        <RoomServiceIcon className="bell" />
      </div>
      <Resume />
    </div>
  )
}

export default Menu
