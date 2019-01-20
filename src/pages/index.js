import React from 'react'
import withHooks, { useState, useEffect } from 'react-with-hooks'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Intro = styled.section`
  padding: 1rem;
  h5 {
    margin: 0;
  }
`
const GoTo = styled.section`
  margin-top: 80px;

  padding: 1rem;
  a {
    display: block;
    margin: 0.5rem;
    margin-left: 0;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Kyle Peacock" keywords={[`gatsby`, `application`, `react`]} />
    <Intro>
      <h1>kyle peacock</h1>
      <h5>is a web developer</h5>
    </Intro>
    <GoTo>
      <p>Why you're probably here:</p>

      <Link to="portfolio">stuff I've made</Link>
      <Link to="about">about me</Link>
      <Link to="blog">my blog</Link>
    </GoTo>
  </Layout>
)

export default IndexPage
