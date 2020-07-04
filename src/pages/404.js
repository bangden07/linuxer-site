import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import config from '../utils/config'
import notfound from '../../content/images/404.png'

export default function FourOhFour() {
  return (
    <Layout>
      <Helmet title={`404 | ${config.siteTitle}`} />
      <SEO />
        <center>
          <img src="{notfound}" alt="404 Error Not Found"></img>
        </center>
    </Layout>
  )
}
