import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo, menu, close} from '../assets';



const Navbar = () => {

  const [active, setActive] = useState(' ');

  const [toggle, setToggle] = useState(false);
 

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setToggle(!toggle);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setToggle(!toggle);
    setAnchorEl(null);
  };


  return (
    <nav
      className={`${styles.paddingX} w-full flex
      items-center py-5 fixed top-0 z-20
      bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/'
        className='flex items-center gap-2'
        onClick={()=>{
          setActive('');
          window.scrollTo(0, 0);
        }}
        style={{ textDecoration: 'none' }} >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' style={{ filter: 'brightness(0) invert(1)' }}/>
          <p className='text-[18px] font-bold cursor-pointer'>Aya Hamza</p>
        </Link>
        
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li
              key={link.id}
              className={`${active===link.title ? "text-white" : "text-secondary"}
              text-[14px] hover:text-white text-[15px] font-medium cursor-pointer`}
              onClick={()=> setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[20px] h-[20px] 
          object-contain cursor-pointer '
          onClick={handleClick}/>
        </div>
        <Menu
        className='m-2'
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {navLinks.map((link)=>(
            <MenuItem
              key={link.id}
              className={`${active===link.title ? "text-white" : "text-secondary"}
              cursor-pointer`}
              onClick={()=> {setActive(link.title); handleClose();}}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </MenuItem>
          ))}
      </Menu>
      </div>
    </nav>
  )
}

export default Navbar