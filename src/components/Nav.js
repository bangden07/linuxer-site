import React from 'react'
import { Link } from 'gatsby'

import logo from '../../content/thumbnails/linuxer-200.png'

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex">
          <div>
            <Link to="/" className="brand">
              <img src={logo} className="footer-img" alt="logo" />
            </Link>
          </div>
          <div>
            <Link to="/blog">Blog</Link>
            <Link to="/guides">Guides</Link>
            <Link to="/me">About</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
