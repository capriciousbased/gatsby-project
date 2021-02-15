import React from "react"
import { Link } from "gatsby"
import headerStyle from "./header.module.scss"
const Header = () => {
  return (
    <header className={headerStyle.header}>
      <Link className={headerStyle.title} to="/">
        <h1> Anisul Khan</h1>
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
