import React from 'react'
import Header from '../components/Header/Header'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'

import Footer from '../components/Footer/Footer'
const Shop = () => {
  return (
    <div>
      <Header/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      <Footer/>

    </div>
  )
}

export default Shop