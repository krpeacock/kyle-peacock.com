import React from "react";
import Link from "gatsby-link";
import Layout from "../../layouts/layout";
import styled from "styled-components";

const Section = styled.section`
  padding: 1rem;
  a {
    display: block;
  }
  ul {
    margin-left: 0;
  }
  ul ul {
    margin-left: 1rem;
  }
  li {
    list-style-type: none;
  }
`;

const Portfolio = () => (
  <Layout>
    <Section>
      <h1>Portfolio</h1>
      <br />
      <ul>
        <li>
          <p>
            <a href="https://peacock.dev/canvas">IC Canvas</a>
          </p>
          <p>
            IC Canvas was an Internet Computer interactive art project, where
            people could update a single picture of the canvas at a time. The
            canvas received tens of thousands of page hits and hundreds of
            thousands of updates during its run, and the final images were
            rendered server-side from state on the contract using Rust.
          </p>
        </li>
        <li>
          <p>
            <a href="https://qopmg-3aaaa-aaaab-qadsq-cai.ic0.app">IC Avatar</a>
          </p>
          <p>
            Tutorial project from the Coding with Kyle educational series for
            Dfinity. This app demonstrates how to build a full-stack Internet
            Computer application using Motoko and React using the Internet
            Identity authentication service.
          </p>
          <ul>
            <li>
              <h5>
                <a href="https://github.com/krpeacock/ic-avatar">Github</a>
              </h5>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <a href="https://tenantprotections.org/">Tenant Protections</a>
          </p>
        </li>
        <li>
          <p>
            <a href="https://app.lanebreach.org">
              Lanebreach (311 reporting tool)
            </a>
          </p>
        </li>
        <li>
          <p>
            <a href="https://www.instructables.com/id/Google-Home-Raspberry-Pi-Power-Strip/">
              Raspberry Pi + Google Home Power Strip
            </a>
          </p>
        </li>
        <li>
          <p>
            <a href="https://www.npmjs.com/package/react-controlled-dialog">
              React Controlled Dialog
            </a>
          </p>
        </li>
        <div style={{ display: "block", marginBottom: "32px" }} />
      </ul>
      <Link to="/">Return Home</Link>
    </Section>
  </Layout>
);

export default Portfolio;
