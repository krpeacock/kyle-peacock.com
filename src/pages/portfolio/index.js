import React from "react";
import Link from 'gatsby-link'
import Layout from '../../components/layout'
import styled from 'styled-components'

const Section = styled.section`
    padding: 1rem;
`

const Portfolio = () => (<Layout>
    <Section>
    <h1>Coming Soon...</h1>
    <Link to="/">Return Home</Link>
    </Section>
</Layout>);

export default Portfolio;
