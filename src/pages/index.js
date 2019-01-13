import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import AboutPage from './about'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to my site.</p>
    <p>I am Praveen Kumar and I am a Designer and a Developer.</p>
  </Layout>
)

export default IndexPage
