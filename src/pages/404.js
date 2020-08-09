import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import config from '../utils/config'

export default function FourOhFour() {
  return (
    <Layout>
      <Helmet title={`404 | ${config.siteTitle}`} />
      <SEO />
      <div className="container text-center">
        <header>
          <h1>404</h1>
          <p className="subtitle">Halaman yang Anda cari tidak ada.</p>
        </header>
      </div>
    </Layout>
  )
}