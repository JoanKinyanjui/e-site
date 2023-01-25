import React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';
// import {BsList } from "react-icons/bs";

function MiddleNav() {
  return (
    <div className='MiddleNav flex items-center'>
        <div className='MiddleNav-div'>
        <div className="MiddleNav-one text-3xl flex place-content-left flex items-center"><img src='https://opencart.mahardhi.com/MT04/jewels/image/catalog/logo.png' /></div>
        <div className='MiddleNav-two flex items-center'>
            <SearchIcon className="searchIcon" />
            <LocalMallOutlinedIcon  className='LocalMallOut'/>
            <MenuOutlinedIcon  className='MenuOutlined'/>
        </div>
        </div>
    </div>
  )
}

export default MiddleNav