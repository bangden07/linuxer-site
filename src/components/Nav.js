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
          <Link to="/saya">About</Link>
            <Link to="/blog">Artikel</Link>
            <Link to="/guides">Panduan</Link>
            <button
              id="dark-mode-button"
              onClick={(event) => {
                const theme =
                  typeof window !== 'undefined' && localStorage.getItem('theme')

                if (theme === 'dark') {
                  typeof window !== 'undefined' &&
                  localStorage.removeItem('theme')
                  const link = document.querySelectorAll('#dark-mode')

                  if (link) {
                    link.forEach((el) => el.remove())
                    event.target.textContent = '🌙'

                    const message = {
                      type: 'set-theme',
                      theme: 'github-light',
                    }
                    let utterances = document.querySelector('iframe')
                    if (utterances && utterances.contentWindow) {
                      utterances.contentWindow.postMessage(
                        message,
                        'https://utteranc.es'
                      )
                    }
                  }
                } else {
                  typeof window !== 'undefined' &&
                  localStorage.setItem('theme', 'dark')
                  event.target.textContent = '☀️'
                  const head = document.getElementsByTagName('head')[0]
                  const link = document.createElement('link')
                  link.rel = 'stylesheet'
                  link.id = 'dark-mode'
                  link.href = '../dark.min.css'

                  head.appendChild(link)
                }
              }}
            >
              {typeof window !== 'undefined' &&
              localStorage.getItem('theme') === 'dark'
                ? '☀️'
                : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
