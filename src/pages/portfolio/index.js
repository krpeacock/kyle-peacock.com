import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/layout'
import styled from 'styled-components'

const Section = styled.section`
  padding: 1rem;
  a {
    display: block;
  }
`

const Portfolio = () => (
  <Layout>
    <Section>
      <h1>Portfolio</h1>
      <a href="https://app.lanebreach.org">Lanebreach (311 reporting tool)</a>
      <a href="https://www.instructables.com/id/Google-Home-Raspberry-Pi-Power-Strip/">
        Raspberry Pi + Google Home Power Strip
      </a>
      <a href="https://www.npmjs.com/package/react-controlled-dialog">
        React Controlled Dialog
      </a>
      <div style={{ display: 'block', marginBottom: '32px' }} />
      <Link to="/">Return Home</Link>
    </Section>
  </Layout>
)

export default Portfolio
