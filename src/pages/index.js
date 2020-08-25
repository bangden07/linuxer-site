import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Posts from '../components/Posts'
import SEO from '../components/SEO'

import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'
import linuxer from '../../content/thumbnails/logolinuxer-min.png'

export default function BlogIndex({ data, ...props }) {
  const latest = data.latest.edges
  const popular = data.popular.edges
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest])
  const simplifiedPopular = useMemo(() => getSimplifiedPosts(popular), [
    popular,
  ])

  const Section = ({ title, children, button, ...props }) => (
    <section {...props}>
      <h2>
        {title}
        {button && (
          <Link className="section-button" to="/blog">
            View all
          </Link>
        )}
      </h2>
      {children}
    </section>
  )

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <section className="lead">
        <div className="container">
          <div className="copy">
            <h1>
                👋 Halo, Saya{' '}
              <Link to="/saya" className="name">
                Linuxer
              </Link>
              .<br /> Media belajar online & tutorial tentang linux ✍
            </h1>
              <p>
                Siapapun dapat ikut serta berkontribusi dengan cara membuat konten artikel
                yang berhubungan dengan Linux dan bersifat tutorial dan/atau informasi.
                Anda dapat membaca semua artikel{' '}
                <Link to="/blog">di sini</Link>, dan melihat{' '}
                <Link to="/guides">tutorial dan panduan</Link>, atau ingin{' '}
                <Link to="/saya">mengetahui aku</Link>.
              </p>
          </div>

          <div className="image">
            <img src={linuxer} alt="Linuxer" />
          </div>
        </div>
      </section>
      <div className="container">
        <Section title="Terbaru" button>
          <Posts data={simplifiedLatest} tags withDate />
        </Section>
        <Section title="Populer" button>
          <Posts data={simplifiedPopular} tags withDate />
        </Section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 20
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
