import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const Container = styled.section`
  padding: 1rem;
`

const SecondPage = () => (
  <Layout>
    <SEO title="about" />
    <Container>
      <h1>About me</h1>
      <p>
        I am the lead frontend developer at{' '}
        <a href="https://cuyana.com">Cuyana</a>, the external communications
        director of the{' '}
        <a href="https://www.sfendc.com/">
          San Francisco Eastern Neighborhoods Club
        </a>
        , and a singer for the Episcopal Church of St Mary the Virgin.
      </p>
      <p>
        I grew up in Walnut Creek and went to college in Illinois where I
        studied Political Science and Philosophy. My wife and I met in Oxford
        while studying abroad, and we moved back to the bay area in 2015.
      </p>
      <p>
        After spending a semester studying Law at UC Davis, I dropped out to
        spend six months learning to code at Galvanize, a programming bootcamp.
      </p>
      <p>
        Since then, I worked at two marketing agencies, Organic and AKQA, where
        I built pages for Wells Fargo and Audi USA. I spent a brief contract at
        Splunk before settling into my current role.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default SecondPage
