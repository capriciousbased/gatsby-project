import React from "react"
import { Link } from "gatsby"
import Footer from "../component/footer"
import Header from "../component/header"
const AboutPage = () => {
  return (
    <div>
      <Header />
      <h2>About Me</h2>
      <h2> I currently learning Frontend web Development . </h2>
      <p>
        Need a Developer ? Please <Link to="/contact">Contact Me. </Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
