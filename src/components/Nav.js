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
            <button
              id="dark-mode"
              onClick={(event) => {
                const theme = localStorage.getItem('theme')

                if (theme === 'dark') {
                  localStorage.removeItem('theme')
                  const link = document.getElementById('dark-mode')

                  if (link) {
                    event.target.textContent = '☀️'
                    link.remove()
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
                  localStorage.setItem('theme', 'dark')
                  const head = document.getElementsByTagName('head')[0]
                  const link = document.createElement('link')
                  link.rel = 'stylesheet'
                  link.id = 'dark-mode'
                  link.href = '../dark.min.css'
                  event.target.textContent = '🌙'

                  head.appendChild(link)

                  const message = {
                    type: 'set-theme',
                    theme: 'github-dark',
                  }
                  let utterances = document.querySelector('iframe')
                  if (utterances && utterances.contentWindow) {
                    utterances.contentWindow.postMessage(
                      message,
                      'https://utteranc.es'
                    )
                  }
                }
              }}
            >
              🌙
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
