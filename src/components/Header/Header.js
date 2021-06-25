import React from 'react'
import * as styles from './Header.module.scss'
import { Container, Row, Col, Nav } from 'react-bootstrap'

export default function Header({ menuItems }) {
  return (
    <Container className={styles.header}>
    <Container className="d-md-block d-lg-block">
    <Row>
      <Col xs={12} sm={12} md={6} className={styles.leftHeader}>
        <div class="logo-image">
          <img class="logo-img" className={styles.headerLogo} src="/NUSL_logo.png" alt="NUS Libraries logo" usemap="#logoBig" />
					<map name="logoBig">
					  <area shape="rect" coords="0,0,130,60" href="http://www.nus.edu.sg" alt="NUS Homepage" target="_blank" />
					  <area shape="rect" coords="220,0,130,60" href="http://www.lib.nus.edu.sg/" alt="NUS Libraries Homepage" />
					</map>
        </div>
      </Col>
      
      <Col xs={12} sm={12} md={6} className={styles.rightHeader}>
        <Nav className={styles.headerNav}>
          <li>
            <a href="https://luminus.nus.edu.sg/">Luminus</a>
          </li>
          <li>
            <a href="http://exchange.nus.edu.sg/">Email</a>
          </li>
          <li> 
            <a href="http://www.lib.nus.edu.sg/">Library</a>
          </li>
          <li>
            <a href="http://www.nus.edu.sg/campusmap/">Map</a>
          </li>
          <li>
            <a href="https://myaces.nus.edu.sg/CoE/">Calendar</a>
          </li>
        </Nav>
      </Col>

      <Col className="d-xs-block d-sm-block">

      </Col>
      </Row>
      </Container>
      </Container>

  )
}
