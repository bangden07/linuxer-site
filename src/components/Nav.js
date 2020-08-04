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
          <div>
            <Link to="/blog">📝 Blog</Link>
            <Link to="/guides">📘 Panduan</Link>
            <Link to="/saya">♥ Tentang</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
