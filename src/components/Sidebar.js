import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import patreon from '../../content/thumbnails/patreon-light.png'
import kofi from '../../content/thumbnails/kofi.png'
import rss from '../../content/thumbnails/rss.png'
import email from '../../content/images/email.png'

import SearchForm from '../components/SearchForm'

import { slugify } from '../utils/helpers'

export default function Sidebar({ post, ...props }) {
  const { tags, thumbnail } = post.frontmatter

  return (
    <aside>
      <div className="aside-content">
      <section>
      {thumbnail && <Img fixed={thumbnail.childImageSharp.fixed} />}
          <h3>Pencarian</h3>
          <SearchForm {...props} />
        </section>
        <section>
          <h3>Di Publikasi</h3>
          <time>{post.frontmatter.date}</time>
          <h3>Tags</h3>
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
          <h3>Penerbit</h3>
          <p>
            Hai, saya Linuxer. Linuxer adalah media belajar online yang
            dapat diakses oleh siapa saja yang ingin belajar tentang linux.
            Linuxer adalah komunitas independent <i>Open Source</i>, siapa saja dapat
            berkontribusi.
          </p>
          <p>
            Media ini saya bebaskan dari:
          </p>
          <ul>
            <li>Tidak ada ads</li>
            <li>Tidak ada social media</li>
            <li>Tidak ada tracking/analytics</li>
            <li>Tidak ada paywall</li>
            <li>Tidak ada third-party scripts</li>
            <li>
              <mark>No bullshit</mark>
            </li>
          </ul>
          <h3>Support</h3>
          <p>
          Jika Anda menyukai apa yang saya lakukan dan ingin mendukung saya,
          Anda dapat melakukannya di bawah!
          </p>
          <nav>
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
          <h3>Tetap berhubungan</h3>
          <p>
            Sesekali saya akan mengirim email ketika saya sudah membuat
            sesuatu yang baru. Tidak ada spam, dapat berhenti berlangganan kapan saja atau ikuti di RSS.
          </p>
          <nav>
            <a
              href="https://linuxer.substack.com/subscribe"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <img src={email} alt="Email" />
              <span>Berlangganan ke daftar email</span>
            </a>
            <Link
              to="/rss.xml"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <img src={rss} alt="RSS" /> <span>RSS Feed</span>
            </Link>
          </nav>
        </section>
      </div>
    </aside>
  )
}