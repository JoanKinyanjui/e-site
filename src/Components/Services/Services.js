import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import  './Services.css';
import {FaGift, FaHeadphones, FaWallet } from 'react-icons/fa';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';


export default function Services() {
  return (
    <div className='Services'>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{margin:"auto",paddingBottom:"10px"}}>
        <Grid item xs={6} md={3} className=''>
          <div className='services-items'>
            <div className='services-items-one '><div><AirplanemodeActiveIcon className='services-icons'/></div></div>
            <div className='services-items-two'>
                <div className='services-items-two-a'>free shipping world-wide</div>
                <div className='services-items-two-a abs text-sm text-gray-400'>on order over $150</div>
            </div>
          </div>
        </Grid>
       
        <Grid item xs={6} md={3} className='border-none'>
          <div className='services-items'>
            <div className='services-items-one '><FaWallet className='services-icons'/></div>
            <div className='services-items-two'>
                <div className='services-items-two-a'>cash on delivery</div>
                <div className='services-items-two-a abs text-sm text-gray-400'>100% money back guarantee</div>
            </div>
          </div>
        </Grid>
    
        <Grid item xs={6} md={3} className='border-none'>
          <div className='services-items'>
            <div className='services-items-one'><FaGift className='services-icons'/></div>
            <div className='services-items-two'>
                <div className='services-items-two-a'>special gift card</div>
                <div className='services-items-two-a abs text-sm text-gray-400'>offer special bonuses with gift</div>
            </div>
          </div>
        </Grid>
      
        <Grid item xs={6} md={3} className='border-none'>
          <div className='services-items'>
            <div className='services-items-one'><FaHeadphones className='services-icons'/></div>
            <div className='services-items-two'>
                <div className='services-items-two-a'>24/7 customer service</div>
                <div className='services-items-two-a abs text-sm text-gray-400'>call us 24/7 at 123-456-789</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}