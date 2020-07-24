import React from 'react'
import { Link } from 'gatsby'

import kofi from '../../content/thumbnails/kofi.png'
import rss from '../../content/thumbnails/rss.png'
import email from '../../content/images/email.png'
import linuxer from '../../content/thumbnails/linuxer-200.png'

import SearchForm from '../components/SearchForm'

import { slugify } from '../utils/helpers'

export default function Sidebar({ post, ...props }) {
  const { tags } = post.frontmatter

  return (
    <aside>
      <div className="aside-content">
        <section>
          <h3>Author</h3>
          <img src={linuxer} className="avatar" alt="Linuxer" />
          <p>
            I'm <Link to="/me">Linuxer</Link>, Media belajar online.
          </p>
          <nav>
            <a
              href="https://linuxer.substack.com/subscribe"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <img src={email} alt="Email" />
              <span>Newsletter signup</span>
            </a>
            <Link
              to="/rss.xml"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <img src={rss} alt="RSS" /> <span>RSS Feed</span>
            </Link>
            <a
              href="https://ko-fi.com/linuxer"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <img src={kofi} alt="Patreon" /> <span>Buy me a coffee</span>
            </a>
          </nav>
        </section>
        <section>
          <h3>Diterbitkan</h3>
          <time>{post.frontmatter.date}</time>
        </section>
        <section>
          <h3>#Tags</h3>
          <div className="cell tags">
            {tags &&
              tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/tags/${slugify(tag)}`}
                  className={`tag-${tag}`}
                >
                  {tag}
                </Link>
              ))}
          </div>
        </section>

        <section>
          <h3>Cari</h3>
          <p>Cari apa saja di situs ini.</p>
          <SearchForm {...props} />
        </section>
      </div>
    </aside>
  )
}
