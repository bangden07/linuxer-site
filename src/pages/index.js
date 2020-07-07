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

import linuxer from '../../content/images/linuxer.png'

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
        <div>
        <h1>Halo, Saya Linuxer</h1>
        <p className="subtitle">
          Linuxer adalah media belajar online yang bersifat{' '}
          <a
            href="https://opensource.org/"
            target="_blank"
            rel="noreferrer"
          >
            Open Source
          </a>.{' '}
          Siapapun dapat ikut serta berkontribusi dengan cara membuat konten artikel
          yang berhubungan dengan Linux dan bersifat tutorial dan/atau informasi.
        </p>
        <p>
          Linuxer bukanlah komunitas yang terfokus dalam suatu kelompok.
          Melainkan kami membuka lebar untuk para kontributor, siapapun.
        </p>
        <p>
          Yuk berkontribusi dengan cara kirimkan artikel ke: <b>konten@linuxer.or.id</b>.
          <br/>
          Persyaratan dapat di lihat di sini: <Link to="/kontributor">Kontributor</Link>.</p>
          <p>Cerdaskan Bangsa dengan Open Source bersama <b>Linuxer</b>.
        </p>
        </div>
        <div>
          <img src={linuxer} alt="linuxer" />
        </div>
      </section>
      <Section title="Terbaru">
        <Posts data={simplifiedLatest} tags />
      </Section>
      <Section title="Populer">
        <Posts data={simplifiedPopular} tags />
      </Section>
      <Section title="Newsletter" className="small">
        <p>
          Sesekali kami akan mengirimkan email, ketika kami membuat konten yang
          baru. Tidak pernah ada spam, dan mudah untuk berhenti berlangganan kapan saja.
        </p>
        <a
          href="https://linuxer.substack.com/subscribe"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Berlangganan ke daftar email
        </a>
      </Section>
      <Section title="Pencarian" className="small">
        <p>Cari apa saja di situs ini.</p>
        <SearchForm {...props} />
      </Section>
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