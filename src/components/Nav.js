import React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="container flex">
        <div>
          <Link to="/" className="brand">
            <span className="emoji">🐧</span> ./Linuxer
          </Link>
        </div>
        <div>
          <Link to="/blog">Blog</Link>
          <Link to="/saya">About</Link>
          <Link to="/mailing-list">Daftar</Link>
        </div>
      </div>
    </nav>
  )
}
