import React from 'react'
import Hero from '../Components/Hero/Hero'
import NewCollections from '../Components/NewCollections/NewCollections'
import Navbar from '../Components/Navbar/Navbar'

const Shop = () => {
  return (
    <><Navbar />
    <div>
      <Hero />
      <NewCollections />
    </div>
    </>
  )
}

export default Shop
