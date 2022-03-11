import React from 'react'
import { useMmodalStore, useProductStore } from '../../Store/store'

//Styles
import './resume.css'

//MUI
import CloseIcon from '@mui/icons-material/Close'
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp'
import AddIcon from '@mui/icons-material/Add'

const Resume = () => {
  const toggleResume = useMmodalStore((state) => state.toggleResume)
  const resume = useMmodalStore((state) => state.resume)
  const cart = useProductStore((state) => state.cart)

  return (
    <div className={`${resume ? 'modal-container' : 'hidden'}`}>
      <div className="resume-header">
        <div className="resume-title">
          <CloseIcon onClick={toggleResume} />
          <h2>Listado del pedido</h2>
        </div>
        <div className="delete">
          <DeleteSharpIcon fontSize="large" />
        </div>
      </div>

      <div className="products-container">
        {cart.map((product, idx) => (
          <div key={idx} className="product-container">
            <img src={product.scr} alt={product.alt} />

            <div className="product-info">
              <p>{product.desc}</p>
              <p className="price">$ {product.price}.00</p>
            </div>

            <div className="add-container">
              <AddIcon color="disabled" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Resume
