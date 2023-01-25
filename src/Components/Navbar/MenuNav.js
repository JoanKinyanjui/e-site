import React from 'react';
import './Navbar';

function MenuNav() {
  return (
    <div className='MenuNav'>
        <div className='MenuNav-div'> 
        <ul className='MenuItem-list'>
            <li className='MenuItems'>Home</li>
            <li className='MenuItems'>Gemstone</li>
            <li className='MenuItems'>Diamond</li>
            <li className='MenuItems'>Gold</li>
            <li className='MenuItems'>Blogs</li>
        </ul>
        </div>
    </div>
  )
}

export default MenuNav