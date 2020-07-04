import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import config from '../utils/config'
import errornotfound from '../../content/thumbnails/404.png'

export default function FourOhFour() {
  return (
    <Layout>
      <Helmet title={`404 | ${config.siteTitle}`} />
      <SEO />
          <img align="center" src={`${errornotfound}`} alt="404 Error Not Found"/>
    </Layout>
  )
}
