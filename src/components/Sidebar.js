import React from 'react'
import { Link } from 'gatsby'

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
            Perkenalkan, Linuxer adalah media belajar mengenal linux dan memberikan
            metode pemebelajaran yang mudah dimengerti.
          </p>
          <p>
            Setiap artikel yang dibagikan bersifat <b>gratis</b>. Kami berharap{' '}
            <b>dengan adanya Linuxer sebagai platform belajar online</b> yang dapat membantu Anda.
          </p>
        </section>
        <section>
          <h3>#Hastag</h3>
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
          <h3>Dipublikasikan</h3>
          <time>{post.frontmatter.date}</time>
        </section>
        <section>
          <h3>Komentar</h3>
          <a href="#comments" className="link">
            Lihat semua diskusi seru
          </a>
        </section>
        <section>
          <h3>Tetap terhubung dengan kami</h3>
          <nav>
            <a
              href="https://linuxer.substack.com/subscribe"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <span className="emoji">✉️</span> Email newsletter
            </a>
            <Link
              to="/rss.xml"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <span className="emoji">☢️</span> RSS feed
            </Link>
            <a
              href="https://ko-fi.com/linuxer"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <span className="emoji">☕</span> Buy me a coffee
            </a>
          </nav>
        </section>
      </div>
    </aside>
  )
}