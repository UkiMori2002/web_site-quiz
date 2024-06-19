import React, { Component } from 'react'
import { Container, NavLink, NavbarCollapse, Nav } from 'react-bootstrap'
import '../App.css'

export default class Personal_account extends Component {
  render() {
    
    return (
      <>
        <Container className="footer">
          <Container className="w-100 d-flex justify-content-around">
            <NavbarCollapse id="responsive-navbar-nav ">
              <Nav className="d-flex justify-content-end">
                <NavLink href='/player'>Главная страница</NavLink>
                <NavLink href='/personal_account'>О нас</NavLink>
                <NavLink href='/personal_account'>О создателе</NavLink>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Container>
      </>
    )
  }
}
