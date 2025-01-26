import React from 'react'
import Nav2 from '@/components/Nav2'
import HeroLinks from '@/components/HeroLinks'
import Blog from '@/components/Blog'
const BlogPage = () => {
  return (
    <div>
      <Nav2/>
      <HeroLinks heading='BlogList List' url1='Home' url2='BlogList'/>
      <Blog/>
    </div>
  )
}

export default BlogPage
