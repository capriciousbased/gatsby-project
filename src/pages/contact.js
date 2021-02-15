import React from "react"
import { Link } from "gatsby"
import Footer from "../component/footer"
import Header from "../component/header"
const Contact = () => {
  return (
    <div>
    <Header />
      <h2>Contact us</h2>
      <p>
        The best way to contact with me via
        <Link to="https://www.linkedin.com/in/anisulkhan/" target="_blank">
          Linkedin
        </Link>
      </p>
      <Footer />
    </div>
  )
}

export default Contact
