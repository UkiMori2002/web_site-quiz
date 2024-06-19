import React, { Component } from 'react'
import { Container, NavLink, Navbar, NavbarCollapse, NavbarToggle, Nav } from 'react-bootstrap'
import logo from './logo.svg'
import '../App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About_us from '../Pages/About_us.js';

export default class Header_for_all extends Component {
  render() {
    return (
      <>
        <Navbar fixed='top' collapseOnSelect expand="md" className='nav' >
          <Container>
            <Navbar.Brand href='/unformation_about_us' >
              <img
                src={logo}
                height='60'
                width='120'
                className='logo-block-header'
                alt='Logo'
              />
            </Navbar.Brand>
            <NavbarToggle aria-controls='responsive-navbar-nav'/>
            <NavbarCollapse id="responsive-navbar-nav ">
              <Nav className=' w-100 d-flex flex-row-reverse bd-highlight'>
                <NavLink href='/unformation_about_us'>Информация о нас</NavLink>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route expact path="/unformation_about_us" element={<About_us/>}/> 
          </Routes>
        </Router>
      </>
    );
  }
}
