import React from 'react'
import ChefGrid from "./ChefGrid"

import HeroLinks from '@/components/HeroLinks';
import Nav2 from '@/components/Nav2';

const OurChefs = () => {
  return (
    <div>
      <Nav2/>
        <HeroLinks heading='Our Chef' url1='Home' url2='Chef'/>
      <ChefGrid />

    </div>
  )
}

export default OurChefs
