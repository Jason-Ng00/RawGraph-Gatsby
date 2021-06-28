import React from 'react'
import * as styles from './Header.module.scss'
import { Container, Col, Navbar, Nav } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


export default function Header() {
  return (
    <Container className={styles.header}>

      <Col xs={12} sm={10} md={8} lg={8} className={styles.headerContainer}>

      <Navbar className={styles.rightHeader} collapseOnSelect expand="sm">
        <Navbar.Brand className={styles.navBrand}>

          <Link to="http://www.lib.nus.edu.sg/">
          <StaticImage
            src="../../images/NUSL_logo.png"
            alt="NUS LOGO"
            height={65}
            width={230}
            loading="eager"
            position="0 0"
            className="logo-image"
            objectFit="contain"
          />
          </Link>
        </Navbar.Brand>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* <Navbar.Collapse className={styles.headerNavItems} id="responsive-navbar-nav">
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
        </Navbar.Collapse> */}
      </Navbar>

      </Col>
 
      </Container>

  )
}
