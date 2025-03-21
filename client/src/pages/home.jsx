import React from 'react'
import Header from '../Components/header'
import Hero from '../Components/hero'
import SameSection from '../Components/sameSection'
import BestSellers from '../Components/bestSellers'

const HomePage  = () => {
  return (
    <div>
        <Header />
        <Hero/>
        <SameSection/>
        <BestSellers/>
    </div>
  )
}

export default HomePage