import React from 'react'
import Hero from '../components/Hero'
import OurVault from '../components/OurVault'

function Home() {
  return (
    <>
    <div className='flex justify-center bg-hero-bg'>
      <Hero/>
    </div>
    <div className='flex justify-center'>
      <OurVault/>
    </div>
    </>
  )
}

export default Home