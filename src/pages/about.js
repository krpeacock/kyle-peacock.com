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
        <a href="https://cuyana.com">Cuyana</a> and a singer for the{' '}
        <a href="https://smvsf.org/">Episcopal Church of St Mary the Virgin.</a>
      </p>
      <p>
        I grew up in Walnut Creek and went to college in Illinois where I
        studied Political Science and Philosophy. My wife and I met in Oxford
        while studying abroad, and we moved back to the bay area in 2015.
      </p>
      <p>
        After spending a semester studying Law at UC Davis, I dropped out to
        spend six months learning to code at{' '}
        <a href="https://www.galvanize.com/">Galvanize</a>, a programming
        bootcamp.
      </p>
      <p>
        Since then, I worked at two marketing agencies,{' '}
        <a href="https://www.organic.com/home">Organic</a> and{' '}
        <a href="https://www.akqa.com/">AKQA</a>, where I built pages for{' '}
        <a href="https://welcome.wf.com/get-college-ready-tracker">
          Wells Fargo
        </a>{' '}
        and <a href="https://www.audiusa.com/myaudi">Audi USA</a>, where I
        re-skinned the My Audi experience. I spent a brief contract at{' '}
        <a href="https://www.splunk.com/">Splunk</a> before settling into my
        current role.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default SecondPage
