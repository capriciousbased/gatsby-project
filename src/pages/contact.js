import React from "react"
import { Link } from "gatsby"
import Layout from "../component/layout"

const Contact = () => {
  return (
    <Layout>
      <h2>Contact us</h2>
      <p>
        The best way to contact with me via
        <Link to="https://www.linkedin.com/in/anisulkhan/" target="_blank">
          Linkedin
        </Link>
      </p>
    </Layout>
  )
}

export default Contact
