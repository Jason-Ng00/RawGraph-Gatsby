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
import { Link, useStaticQuery, graphql } from 'gatsby'
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Layout = ({ pageTitle, children  }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }  
  `)

  return (
    <Container className={styles.layout}>
      <Header menuItems={HeaderItems} />
      <Navbar />

      <AniLink paintDrip to="/page-2">
  Go to Page 2
</AniLink>
      <AniLink cover to="/page-2" bg="#663399">
  Go to index
</AniLink>

      <Content />
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
