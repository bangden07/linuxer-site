import React from 'react'
import { Link } from 'gatsby'

import netlify from '../../content/thumbnails/netlify.png'
import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/thumbnails/github.png'

export default function Footer() {
  return (
    <footer className="footer flex">
      <section className="container">
        <nav className="footer-links">
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <a
            href="https://linuxer.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email newsletter
          </a>
          <Link to="/rss.xml">RSS feed</Link>
          <a
            href="https://ko-fi.com/linuxer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ko-fi
          </a>
        </nav>
        <nav className="flex justify-center">
          <a
            href="https://www.gatsbyjs.org/"
            title="Built with Gatsby"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={gatsby} className="footer-img" alt="Gatsby" />
          </a>
        </nav>
      </section>
    </footer>
  )
}
