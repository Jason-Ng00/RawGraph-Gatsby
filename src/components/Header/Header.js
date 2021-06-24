import React from 'react'
import * as styles from './Header.module.scss'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'

export default function Header({ menuItems }) {
  return (
    <Container className={styles.header}>
    <Container className="d-xs-none d-sm-none d-md-block d-lg-block">

      <Col xs={12} sm={12} md={6} className={styles.leftHeader}>
        <div class="logo-image">
          <img class="logo-img" src="/NUSL_logo.png" alt="NUS Libraries logo" usemap="#logoBig" />
					<map name="logoBig">
					  <area shape="rect" coords="0,0,130,60" href="http://www.nus.edu.sg" alt="NUS Homepage" target="_blank" />
					  <area shape="rect" coords="220,0,130,60" href="http://www.lib.nus.edu.sg/" alt="NUS Libraries Homepage" />
					</map>
        </div>
      </Col>
      
      <Col xs={12} sm={12} md={6} className={styles.rightHeader}>
      
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="https://luminus.nus.edu.sg/">Luminus</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="http://exchange.nus.edu.sg/">Email</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="http://www.lib.nus.edu.sg/">Library</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="http://www.nus.edu.sg/campusmap/">Map</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://myaces.nus.edu.sg/CoE/">Calendar</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      </Col>
      </Container>
      </Container>

  )
}
