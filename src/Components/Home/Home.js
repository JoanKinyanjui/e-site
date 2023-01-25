import React from 'react'
import Carousel from '../Carousel/Carousel'
import Navbar from '../Navbar/Navbar'
import Services from '../Services/Services'

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Services  />
    </div>
  )
}

export default Home