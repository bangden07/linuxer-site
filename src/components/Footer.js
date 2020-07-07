import React from 'react'
import { Link } from 'gatsby'

import netlify from '../../content/thumbnails/netlify.png'
import gatsby from '../../content/thumbnails/gatsby.png'

export default function Footer() {
  return (
    <footer className="footer container">
      <section className="flex">
        <nav className="footer-links">
          <Link to="/saya">About</Link>
          <a
            href="/mailing-list"
            rel="noopener noreferrer"
          >
            Email list
          </a>
          <Link to="/rss.xml">RSS feed</Link>
          <a
            href="https://ko-fi.com/linuxer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ko-fi
          </a>
          <a
            href="/disclaimer"
            rel="noopener noreferrer"
          >
            Disclaimer
          </a>
          <a
            href="/privacy-policy"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </nav>
        <nav className="flex">
          <a
            href="https://www.gatsbyjs.org/"
            title="Built with Gatsby"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={gatsby} className="footer-img" alt="Gatsby" />
          </a>
          <a
            href="https://www.netlify.com/"
            title="Hosted by Netlify"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={netlify} className="footer-img" alt="Netlify" />
          </a>
        </nav>
      </section>
    </footer>
  )
}
