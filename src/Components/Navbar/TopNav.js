import Container from '@mui/material/Container';
import React from 'react';
import './Navbar.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Dropdown from 'react-bootstrap/Dropdown';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
import CurrencyPoundOutlinedIcon from '@mui/icons-material/CurrencyPoundOutlined';

function TopNav() {
  return (
    <div className='TopNav w-screen flex place-content-center'>
      <div className='TopNav-container '>
            <div className=' Forvisible flex text-white'> <AccessTimeIcon style={{fontSize:'small'}} className='self-center mr-2'/><p className='self-center' style={{fontSize:"14px"}}>Mon-Sat: 8.00 - 18.00/Sun: Closed</p></div>
            <div className='flex TopNav-buttons'>
               <div>  <Dropdown className='dropdown bg-transparent'>
                <Dropdown.Toggle className='dropdown-toggle bg-transparent' >Currency: USD</Dropdown.Toggle>
                <Dropdown.Menu className='dropdown-menu bg-transparent border-none'>
                <Dropdown.Item href="#/action-1"><EuroOutlinedIcon style={{fontSize:"14px"}} /> Euro</Dropdown.Item>
                <Dropdown.Item href="#/action-2"><CurrencyPoundOutlinedIcon style={{fontSize:"14px"}} /> Pound Sterling</Dropdown.Item>
                <Dropdown.Item href="#/action-3"><AttachMoneyOutlinedIcon style={{fontSize:"14px"}} /> US Dollar</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>
                
                <div>  <Dropdown className='dropdown bg-transparent'>
                <Dropdown.Toggle className='dropdown-toggle bg-transparent' >Language: EN-GB</Dropdown.Toggle>
                <Dropdown.Menu className='dropdown-menu bg-transparent border-none'>
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
               
                </Dropdown.Menu>
                </Dropdown>
                </div>

                <div>  <Dropdown className='dropdown bg-transparent'>
                <Dropdown.Toggle className='dropdown-toggle bg-transparent text-black' >My Account</Dropdown.Toggle>
                <Dropdown.Menu className='dropdown-menu bg-transparent border-none'>
                <Dropdown.Item href="#/action-1">Register</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>
    
            </div>
        </div>
    </div>
  )
}

export default TopNav