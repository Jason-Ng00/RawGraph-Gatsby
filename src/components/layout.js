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
//import "./layout.css"
import Footer from "./Footer/footer.js"


const Layout = ({ children }) => {


  return (
    <>
      <Header menuItems={HeaderItems} />
      <Navbar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
