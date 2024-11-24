import React from 'react'
import Banner from './Banner'
import HeroSection from './HeroSection'
import Update from './Update'
import AboutUs from './AboutUs'
import UniqueHome from './UniqueHome'

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <UniqueHome></UniqueHome>
      <AboutUs></AboutUs>
      <Update></Update>
      <HeroSection></HeroSection>
    </div>
  )
}

export default Home
