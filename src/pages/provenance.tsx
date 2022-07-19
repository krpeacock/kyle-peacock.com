import React from "react";
import { Link } from "gatsby";

import Layout from "../layouts/layout.js";
import SEO from "../components/seo";
import styled, { css } from "styled-components";
import NotCoinbase from "../components/NotCoinbase";

const Container = styled.section`
  padding: 1rem;
`;

const NamedLink = ({ name, link }) => {
  return (
    <>
      <dt>{name}</dt>
      <dd>
        <a href={link}>{link}</a>
      </dd>
    </>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  dl {
    display: grid;
    grid-template-columns: auto 1fr;
    dt {
      margin-right: 1rem;
    }
  }
`;

const CopyButton = ({ text }) => {
  const [displayText, setDisplayText] = React.useState("copy");
  const clickHandler = () => {
    navigator.clipboard.writeText(text);
    setDisplayText("copied!");
    setTimeout(() => {
      setDisplayText("copy");
    }, 5000);
  };
  return (
    <button
      type="button"
      onClick={clickHandler}
      disabled={displayText === "copied!"}
      style={{ marginBottom: "1rem" }}
    >
      {displayText}
    </button>
  );
};

const Provenance = ({ location }) => (
  <Layout location={location} pageContext={{}}>
    <SEO title="provenace" />
    <Container>
      <h1>Provenance</h1>
      <h2>
        Wondering if this is me? Here are my official accounts and identifiers.
      </h2>
      <Section id="socials">
        <h3>
          <a href="#socials">Socials</a>
        </h3>
        <dl>
          <NamedLink name="Twitter" link="https://twitter.com/kylpeacock" />
          <NamedLink name="GitHub" link="https://github.com/krpeacock" />
          <NamedLink name="DSCVR" link="https://dscvr.one/u/kyle" />
          <NamedLink name="Distrikt" link="https://distrikt.app/u/kyle" />
          <dt>Discord</dt>
          <dd>Kyle#8394</dd>
        </dl>
      </Section>
      <Section id="crypto-handles">
        <h3>
          <a href="#crypto-handles">Crypto Handles</a>
        </h3>
        <dl>
          <dt>ICP</dt>
          <dd>
            <ul>
              <li>kyle.icp</li>
              <li>peacock.icp</li>
            </ul>
          </dd>
          <dt>Dmail</dt>
          <dd>pavus@dmail.ai</dd>
          <dt>Eth</dt>
          <dd>pavus.eth</dd>
        </dl>
      </Section>
      <Section id="public-keys">
        <h3>
          <a href="#public-keys">Public Keys</a>
        </h3>
        <dl>
          <dt>
            <p>Plug</p>
            <CopyButton text="ycrxc-wiiym-cghia-slzam-ouyhd-4xojs-vrrug-fvcqd-aibag-22sup-pqe" />
          </dt>
          <dd>
            <pre>
              ycrxc-wiiym-cghia-slzam-ouyhd-4xojs-vrrug-fvcqd-aibag-22sup-pqe
            </pre>
          </dd>
          <dt>
            <p>DFX</p>
            <CopyButton text="jhnlf-yu2dz-v7beb-c77gl-76tj7-shaqo-5qfvi-htvel-gzamb-bvzx6-yqe" />
          </dt>
          <dd>
            <pre>
              jhnlf-yu2dz-v7beb-c77gl-76tj7-shaqo-5qfvi-htvel-gzamb-bvzx6-yqe
            </pre>
          </dd>
        </dl>
      </Section>
    </Container>
  </Layout>
);

export default Provenance;
