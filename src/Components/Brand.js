import React from 'react'
import {Navbar} from 'react-bootstrap'
import Brand_logo from '../image/Brand_logo.png'
import '../css/Brand.css'

export default function Brand() {
    return (
    
  <Navbar  variant="dark">
    <Navbar.Brand className="logo-icon" href="#home">
      {' Sacred Fire'}
      <img
        alt=""
        src={Brand_logo}
        width="40"
        height="40"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
  </Navbar>
    )
}
