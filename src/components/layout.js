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

import { Container } from 'react-bootstrap'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { motion, AnimatePresence } from "framer-motion"

const duration = 0.5
const variants = {
  initial: {
    opacity: 0,
    x: 100
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: { duration: duration },
  },
}

export const Layout = ({ pageTitle, children}) => {
  return (
    <Container className={styles.layout}>
      <Header menuItems={HeaderItems} />
      <Navbar />
      <Container>
                <motion.main
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{
              type: "spring",
              mass: 0.35,
              stiffness: 75,
              duration: 1.0
              }}
            >
                {children}
              </motion.main>
      </Container>


      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
