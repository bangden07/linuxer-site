import React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex">
          <div>
            <Link to="/" className="brand">
              <span className="emoji">🐧</span> Linuxer
            </Link>
          </div>
          <div className="flex">
            <Link to="/saya">
              <span className="emoji">❤️</span> Tentang
            </Link>
            <Link to="/blog">
              <span className="emoji">📝</span> Blog
            </Link>
            <Link to="/guides">
              <span className="emoji">📘</span> Panduan
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
