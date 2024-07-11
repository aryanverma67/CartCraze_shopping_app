import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Homepage = () => {
  return (
    <div >
      <CategoryList/>
      <BannerProduct/>
      <HorizontalCardProduct category ={"airpodes"} heading = {"Top's Airpodes"} />
      <HorizontalCardProduct category ={"earphones"} heading = {"wired Earphones"} />
      <VerticalCardProduct category ={"mobiles"} heading = {"popular's mobiles"} />
      <VerticalCardProduct category ={"printers"} heading = {"popular's printers"} />
      <VerticalCardProduct category ={"televisions"} heading = {"popular's television"} />
      <VerticalCardProduct category ={"speakers"} heading = {"bluetooth speakers"} />



    </div>
  )
}

export default Homepage