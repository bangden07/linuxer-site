import React from 'react'
import { Link } from 'gatsby'

import SearchForm from '../components/SearchForm'
import linuxer from '../../content/thumbnails/linuxer-200.png'

import { slugify } from '../utils/helpers'

export default function Sidebar({ post, ...props }) {
  const { tags } = post.frontmatter

  return (
    <aside>
      <div className="aside-content">
        <section>
          <img src={linuxer} alt="Linuxer" className="avatar" />
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
              Join Newsletter
            </a>
            <Link
              to="/rss.xml"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              RSS Feed
            </Link>
            <a
              href="https://ko-fi.com/linuxer"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Buy me a Coffee
            </a>
          </nav>
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
          <h3>Diterbitkan</h3>
          <time>{post.frontmatter.date}</time>
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
