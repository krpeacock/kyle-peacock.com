import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Typography from "typography";
import fairyGatesTheme from "typography-theme-fairy-gates";
import store from "store";
import "prismjs/themes/prism-twilight.css";
import { TitleAndDate, Date as BlogDate } from "../components/BlogComponents";
import { Link } from "gatsby";
import SEO from "../components/seo";
import * as Sentry from "@sentry/browser";
import ErrorBoundary from "../components/ErrorBoundary";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
const queryString = require("query-string");

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  ol {
    padding-left: 0;
    margin-left: 0;
  }
  li {
    list-style: none;
    display: inline;
    a {
      text-transform: capitalize;
    }
  }
`;

if (process.env.GATSBY_SENTRY_URL) {
  Sentry.init({ dsn: process.env.GATSBY_SENTRY_URL });
}

const black = "black";
fairyGatesTheme.headerColor = black;
fairyGatesTheme.bodyColor = black;
fairyGatesTheme.linkColor = black;
const typography = new Typography(fairyGatesTheme);
typography.injectStyles();

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  :root {
    --background:  ${props => (props.mode === "light" ? "white" : "#04141b")};
    --text-color: ${props =>
      props.mode === "light" ? "black" : "rgba(236, 236, 236, 0.85)"};
    --title-color: ${props =>
      props.mode === "light" ? "#415161" : "rgba(236, 236, 236, 0.85)"};
    font-family: 'Open Sans', sans-serif;
  }  
  body {
    margin: 0;
    min-height: 100vh;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    text-transform: ${props => (props.capitalize ? "none" : "lowercase")};
    background: var(--background);
    color: var(--text-color);
    img, picture {

      img {
        filter: none;
      }
    }

    a, button {
    color: var(--text-color);
    filter: ${props => (props.mode === "light" ? null : `invert(100%)`)};
    background-image: none;
    color: #45d801;
    border-bottom: 1px solid #45d801;
    text-shadow: none;
    width: fit-content;
    &:focus,
    &:hover {
      transform: scale(1.1)t;
    }
  }
  a:visited {
    color: #45d801;
  }
  pre, code {
    text-transform: none;
  }
  iframe {
    filter: ${props => (props.mode === "light" ? null : `invert(100%)`)};
  }

  h1, h2, h3, h4, h5, h6, p {
    color: var(--text-color);
  }
  }

`;

export const Main = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
  height: 100%;
  padding: 1rem;
  @media (min-width: 376px) {
    text-align: left;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;
  bottom: 0;
  padding: 1rem;
  max-width: 100%;
  overflow-x: hidden;
  background: white;
  clear: both;
  background: var(--background);
  color: var(--text-color);
  #newsletterFrame {
    height: 100px;
    overflow: hidden;
    position: relative;
    width: 320px;
    iframe {
      position: absolute;
      top: -36px;
      background: transparent;
      margin-bottom: 0;
    }
  }
`;
const Button = styled.button`
  --size: 2.5rem;
  height: var(--size);
  width: var(--size);
  position: absolute;
  top: 10px;
  cursor: pointer;
  right: 10px;
  z-index: 1;
  border: 1px solid black;
  background-color: white;
  font-size: calc(var(--size) / 3.5);
  border-radius: 100%;
`;

export default ({ children, pageContext, location }) => {
  console.log(location);
  const parsed = queryString.parse(location?.search);
  const [mode, setMode] = useState(parsed?.mode || "light");
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setMode(store.get("mode") || "light");
    setLoaded(true);
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    fetch("https://kylepeacock.substack.com/api/v1/free?nojs=true", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then(() => {})
      .catch(error => {
        setError(error);
        debugger;
      });
  };

  console.log(pageContext);
  return (
    <ErrorBoundary>
      <SEO title="Kyle Peacock's website" {...pageContext?.frontmatter} />
      <GlobalStyle mode={mode} capitalize={!!pageContext?.frontmatter} />
      <Button
        type="button"
        onClick={() => {
          let newMode = mode === "light" ? "dark" : "light";
          store.set("mode", newMode);
          return setMode(newMode);
        }}
        title="toggle dark mode"
      >
        {mode}
      </Button>
      <Main>
        <Nav>
          {pageContext?.breadcrumb ? (
            <Breadcrumb
              crumbs={pageContext?.breadcrumb?.crumbs}
              crumbSeparator=" - "
              crumbLabel={pageContext?.frontmatter?.title || "Home"}
            />
          ) : null}
        </Nav>
        {pageContext?.frontmatter ? (
          <TitleAndDate>
            <Link
              to={`./${pageContext?.frontmatter?.path}`}
              style={{ textDecoration: "none" }}
            >
              <h1>{pageContext?.frontmatter?.title}</h1>
            </Link>
            <BlogDate>
              {(() => {
                const dt = new Date(pageContext?.frontmatter?.date)
                  .toDateString()
                  .split(" ");
                return `${dt[1]} ${dt[2]}, ${dt[3]}`;
              })()}
            </BlogDate>
          </TitleAndDate>
        ) : null}
        {children}
      </Main>
      <Footer mode={mode}>
        <span>&copy; Kyle Peacock {new Date().getFullYear()}</span>
        <div
          id="newsletterFrame"
          dangerouslySetInnerHTML={{
            __html: loaded
              ? `<iframe
        src="https://kylepeacock.substack.com/embed"
        width="320"
        height="180"
        frameBorder="0"
        scrolling="no"
        />`
              : null,
          }}
        ></div>
      </Footer>
    </ErrorBoundary>
  );
};
