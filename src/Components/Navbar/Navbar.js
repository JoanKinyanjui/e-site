import React from 'react'
import MenuNav from './MenuNav'
import MiddleNav from './MiddleNav'
import TopNav from './TopNav'

function Navbar() {
  return (
    <div>
        <TopNav />
        <MiddleNav />
        <MenuNav />
    </div>
  )
}

export default Navbar