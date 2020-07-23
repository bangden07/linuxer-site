import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Posts from '../components/Posts'
import Lists from '../components/Lists'
import Projects from '../components/Projects'
import SEO from '../components/SEO'
import SearchForm from '../components/SearchForm'

import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

import projects from '../data/projects'
import interviews from '../data/interviews'
import speaking from '../data/speaking'

import linuxer from '../../content/thumbnails/logolinuxer-min.png'

export default function BlogIndex({ data, ...props }) {
  const latest = data.latest.edges
  const popular = data.popular.edges
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest])
  const simplifiedPopular = useMemo(() => getSimplifiedPosts(popular), [
    popular,
  ])

  const Section = ({ title, children, ...props }) => (
    <section {...props}>
      <h2>{title}</h2>
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
              .<br /> ✍ Media belajar online & tutorial tentang linux.
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
        <Section title="Latest">
          <Posts data={simplifiedLatest} tags />
        </Section>
        <Section title="Popular">
          <Posts data={simplifiedPopular} tags />
        </Section>
        <Section title="Projects">
          <Projects data={projects} />
        </Section>
        <Section title="Interviews &amp; Podcasts" className="medium">
          <Lists data={interviews} />
        </Section>
        <Section title="Speaking" className="medium">
          <Lists data={speaking} />
        </Section>
        <Section title="Newsletter" className="small">
          <p>
            I sent out an email when I've created something new. Never any spam,
            easy unsubscribe whenever. Keep in touch!
          </p>
          <a
            href="https://taniarascia.substack.com/subscribe"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Subscribe to the Email list
          </a>
        </Section>
        <Section title="Search" className="small">
          <p>Search anything in the blog.</p>
          <SearchForm {...props} />
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
