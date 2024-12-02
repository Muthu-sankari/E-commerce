import React from 'react'
import Header from '../components/Header/Header'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'

const Shop = () => {
  return (
    <div>
      <Header/>
      <Popular/>
      <Offers/>
      <NewCollections/>
    </div>
  )
}

export default Shop