import React from 'react'
import Hero from '../Components/Hero/Hero'
import NewCollections from '../Components/NewCollections/NewCollections'
import Category from '../Components/Category/Category'
import GridLayout from '../Components/GridLayout/GridLayout'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
import Navbar from '../Components/Navbar/Navbar'


const Shop = () => {
  return (
    <><Navbar />
    <div>
      <Hero />
      {/* <Category /> */}
      {/* <NewCollections /> */}
      {/* <GridLayout /> */}
      {/* <RelatedProducts /> */}
    </div>
    </>
  )
}

export default Shop
