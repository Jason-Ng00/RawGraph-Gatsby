import React from 'react'
import * as styles from './Header.module.scss'
import { Container, Col, Navbar} from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import logo from "../../images/NUSL_logo.png"


export default function Header() {
  return (
    <Container className={styles.header}>

      <Col xs={12} sm={10} md={9} lg={8} className={styles.headerContainer}>

          <Link to="http://www.lib.nus.edu.sg/">
          <StaticImage
            src="../../images/NUSL_logo.png"
            alt="NUS LOGO"
            height={65}
            width={230}
            layout="fixed"
            loading="eager"
            position="0 0"
            className={styles.logo}
            objectFit="contain"
          />
          </Link>

          <img src={logo} alt="NUS"></img>

      </Col>
 
      </Container>

  )
}
