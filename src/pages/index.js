import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../layouts/layout";
import SEO from "../components/seo";

const Intro = styled.section`
  h5 {
    margin: 0;
  }
`;
const GoTo = styled.section`
  margin-top: 80px;
  a {
    display: block;
    margin: 0.5rem;
    margin-left: 0;
  }
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro>
      <h1>kai peacock</h1>
      <h5>is a web developer</h5>
    </Intro>
    <GoTo>
      <p>Why you're probably here:</p>

      <Link to="about">about me</Link>
      <Link to="blog">my blog</Link>
      <Link to="portfolio">stuff I've made</Link>
      <Link to="provenance">is it kai? (socials and provenance)</Link>
    </GoTo>
  </Layout>
);

export default IndexPage;
