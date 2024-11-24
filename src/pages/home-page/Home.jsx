import React from 'react'
import Banner from './Banner'
import HeroSection from './HeroSection'
import Update from './Update'
import AboutUs from './AboutUs'
import UniqueHome from './UniqueHome'
import EstateService from './EstateService';

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <EstateService></EstateService>
      <UniqueHome></UniqueHome>
      <AboutUs></AboutUs>
      <Update></Update>
      <HeroSection></HeroSection>
    </div>
  )
}

export default Home
