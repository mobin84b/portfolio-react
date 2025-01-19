import React, { useState } from 'react'
import './Navbar.css'
import logo from "../../../public/image/logo.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { TiThMenuOutline } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";



export default function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className='nav-menu'>
          <li className='menubar'><TiThMenuOutline/></li>
          <li className='close-menu'><IoCloseOutline/></li>
          <li><AnchorLink className='anchor-link' href="#home">Home</AnchorLink> </li>
          <li><AnchorLink className='anchor-link' offset={10} href="#about">About Me</AnchorLink> </li>
          <li><AnchorLink className='anchor-link' offset={10} href="#service">Services</AnchorLink> </li>
          <li><AnchorLink className='anchor-link' offset={10} href="#contact">Contact</AnchorLink> </li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={10} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  )
}
