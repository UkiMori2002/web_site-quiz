import React, { Component } from 'react'
import { Container, NavLink, Navbar, NavbarCollapse, NavbarToggle, Nav } from 'react-bootstrap'
import logo from './logo.svg'
import '../App.css'
import { Link } from 'react-router-dom';

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
              <NavLink as={Link} to="/">Главная страница</NavLink>
              <NavLink as={Link} to="/team">Команды</NavLink>
              <NavLink as={Link} to="/unformation_about_us">Информация о нас</NavLink>
              <NavLink as={Link} to="/personal_account">Личный кабинет</NavLink>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
