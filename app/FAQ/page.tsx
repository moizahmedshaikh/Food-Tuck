import React from 'react'
import FAQPage from "./FAQpage"
import Nav2 from '@/components/Nav2'
import HeroLinks from '@/components/HeroLinks'

const FAQpage = () => {
  return (
    <div> 
      <Nav2/>
      <HeroLinks heading='Faq Page' url1='Home' url2='Faq'/>
      <FAQPage />
    </div>
  )
}

export default FAQpage
