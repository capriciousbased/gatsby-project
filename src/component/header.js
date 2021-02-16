import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyle from "./header.module.scss"
const Header = () => {
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
    <header className={headerStyle.header}>
      <Link className={headerStyle.title} to="/">
        {data.site.siteMetadata.title}
      </Link>
      <nav>
        <ul className={headerStyle.navList}>
          <li>
            <Link
              className={headerStyle.navItem}
              activeClassName={headerStyle.activeNaveItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyle.navItem}
              activeClassName={headerStyle.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyle.navItem}
              activeClassName={headerStyle.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyle.navItem}
              activeClassName={headerStyle.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
