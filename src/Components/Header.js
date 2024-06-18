import React, { Component } from 'react'
import { Container, NavLink, Navbar, NavbarCollapse, NavbarToggle, Nav } from 'react-bootstrap'
import logo from './logo.svg'
import '../App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../Pages/Home.js';
import Team from '../Pages/Team.js';
import About_us from '../Pages/About_us.js';
import Personal_account from '../Pages/Personal_account.js';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar fixed='top' collapseOnSelect expand="md" className='nav' >
          <Container>
            <Navbar.Brand href='/' >
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
              <Nav className="w-100 d-flex justify-content-around ">
                <NavLink href='/'>Главная страница</NavLink>
                <NavLink href='/team'>Команды</NavLink>
                <NavLink href='/unformation_about_us'>Информация о нас</NavLink>
                <NavLink href='/personal_account'>Личный кабинет</NavLink>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route expact path="/" element={<Home/>}/> 
            <Route expact path="/team" element={<Team/>}/> 
            <Route expact path="/unformation_about_us" element={<About_us/>}/> 
            <Route expact path="/personal_account" element={<Personal_account/>}/> 
          </Routes>
        </Router>
      </>
    );
  }
}
