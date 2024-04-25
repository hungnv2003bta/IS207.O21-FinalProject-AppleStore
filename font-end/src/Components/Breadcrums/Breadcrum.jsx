import React from 'react'
import './Breadcrum.css'

const Breadcrum = (props) => {
  const {product} = props;
  return (
    <div class='breadcrum'>
      {product.category} <i class='bx bx-chevron-right'></i> {product.name}
    </div>
  )
}

export default Breadcrum
