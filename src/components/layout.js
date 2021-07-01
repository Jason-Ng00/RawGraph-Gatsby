/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import HeaderItems from './HeaderItems.js'
import Header from "./Header/Header.js"
import Navbar from "./Navbar/Navbar.js"
import * as styles from "./layout.module.scss"
import Footer from "./Footer/Footer.js"
import Content from "./Content/Content.js"
import { Container } from 'react-bootstrap'

const Layout = ({ children }) => {
  return (
    <Container className={styles.layout}>
      <Header menuItems={HeaderItems} />
      <Navbar />
      <Content />
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
