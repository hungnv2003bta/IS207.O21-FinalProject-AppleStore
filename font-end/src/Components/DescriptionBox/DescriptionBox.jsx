import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">REview</div>
      </div>
      <div className="descriptionbox-description">
        <p>O day la descriptionbox-desciption</p>
      </div>
    </div>
  )
}

export default DescriptionBox
