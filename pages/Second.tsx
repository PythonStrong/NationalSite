import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SecondHero from '@/components/SecondHero'
import SecondMain from '@/components/SecondMain'
import React from 'react'

export default function Second() {
  return (
    <div>
        <Navbar />
        <SecondHero />
        <SecondMain />
        <Footer />
    </div>
  )
}
