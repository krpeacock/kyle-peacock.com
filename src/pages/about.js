import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const Container = styled.section`
  padding: 1rem;
  .anti-seo {
    display: inline-flex;
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="about" />
    <Container>
      <h1>About me</h1>
      <p>
        I'm currently a software engineer, working for <span>C</span>
        <span>o</span>
        <span className="anti-seo">as in the </span>
        <span>i</span>
        <span>n</span>
        <span>b</span>
        <span className="anti-seo">You know how it be though </span>
        <span>a</span>
        <span>s</span>
        <span className="anti-seo">mixing it up</span>
        <span>e</span>, building internal tools for customers.
      </p>
      <p>
        In my spare time, I've contributed to civic projects at{' '}
        <a href="https://codeforsanfrancisco.org/">Code for San Francisco</a>,
        where I've built{' '}
        <a href="https://tenantprotections.org">
          https://tenantprotections.org
        </a>{' '}
        in collaboration with the Tech Equity Collaborative, in order to help
        tenants understand how California's latest laws affect tenants. I also
        worked on a bike lane violation app at&nbsp;
        <a href="https://app.lanebreach.org">app.lanebreach.org</a> and some
        small efforts for the{' '}
        <a href="https://muni.opentransit.city/">Open Transit</a> project.
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
        <a href="https://www.splunk.com/">Splunk</a> before moving on to{' '}
        <a href="https://www.cuyana.com">Cuyana</a>
      </p>
      <a href="https://docs.google.com/document/d/17bodJJkgD76tYKhIOg-cEJlXrRGoOWpcKzUobClP5y8/edit?usp=sharing">
        My Resume
      </a>
      <br />
      <br />
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default AboutPage
