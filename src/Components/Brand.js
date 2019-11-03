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
        className="d-inline-block align-top img-brand"
      />
    </Navbar.Brand>
  </Navbar>
    )
}
