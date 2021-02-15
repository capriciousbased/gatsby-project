import React from "react"
import { Link } from "gatsby"
import Layout from "../component/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h2>About Me</h2>
      <h2> I currently learning Frontend web Development . </h2>
      <p>
        Need a Developer ? Please <Link to="/contact">Contact Me. </Link>
      </p>
    </Layout>
  )
}

export default AboutPage
