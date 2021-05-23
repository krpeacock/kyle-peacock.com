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
    --cancan: #D594B3;
    --peacock-green: #28494C;
    --red-violet: #CC3596;
    --pink: #ed83e4;
    --light-blue: #86bcf9;
    --purple: #b28ff8;
    --kabul: #6A4D44;
    --dark-bg: #18171a;
    --background:  ${(props) =>
      props.mode === "light" ? "white" : "var(--dark-bg)"};
    --text-color: ${(props) =>
      props.mode === "light" ? "black" : "rgba(236, 236, 236, 0.85)"};
    --title-color: ${(props) =>
      props.mode === "light" ? "#415161" : "rgba(236, 236, 236, 0.85)"};
    --contrast-color: var(--red-violet);
    --button-background: ${(props) =>
      props.mode === "light" ? "var(--peacock-green)" : "var(--cancan)"};

    font-family: 'Open Sans', sans-serif;
  }  
  body {
    margin: 0;
    min-height: 100vh;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    text-transform: ${(props) => (props.capitalize ? "none" : "lowercase")};
    background: var(--background);
    color: var(--text-color);
    img, picture {

      img {
        filter: none;
      }
    }

    a, button {
    color: var(--text-color);
    background-image: none;
    color: var(--contrast-color);
    border-bottom: 1px solid var(--contrast-color);
    text-shadow: none;
    text-transform: none;
    text-decoration: none;
    width: fit-content;
    &:focus,
    &:hover {
      transform: scale(1.1)t;
    }
  }
  a:visited {
    color: var(--contrast-color);
  }
  pre, code {
    text-transform: none;
  }
  pre[class*="language-"] {
    margin-bottom: 1rem;
    border-color: var(--peacock-green);
    background: var(--dark-bg);
    .token.keyword, .token.property, .token.selector, .token.constant, .token.symbol, .token.builtin {
      color: var(--pink);
    }
    .token.attr-name, .token.attr-value, .token.string, .token.char, .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable, .token.inserted {
      color: var(--light-blue);
    }
  }
  code {
    padding: .2em .4em;
    transform: scale(85%);
    background-color: rgba(240, 246, 252, 0.15);
    border-radius: 6px;
  }
  #newsletterFrame {
    padding: 1rem;
    border-radius: 8px;
    background: var(--dark-bg);
  }
  blockquote {
    border-left: 0.54375rem solid var(--red-violet);
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
  @media (min-width: 767px) {
    width: 600px;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 980px;
  }
  @media (min-width: 1280px) {
    width: 1080px;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-flow: column-reverse;
  justify-content: center;
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
  @media (min-width: 767px) {
    flex-flow: row wrap;
  }
  #newsletterFrame {
    height: 132px;
    overflow: hidden;
    position: relative;
    border: 2px solid var(--peacock-green);
    width: 342px;
    margin: auto;
    margin-bottom: 1rem;
    @media (min-width: 767px) {
      margin: initial;
    }
    iframe {
      position: absolute;
      top: -20px;
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
  border: 1px solid transparent;
  background-color: var(--peacock-green);
  color: white;
  font-size: calc(var(--size) / 3.5);
  border-radius: 100%;
`;

export default ({ children, pageContext, location, data }) => {
  const parsed = queryString.parse(location?.search);
  const [mode, setMode] = useState(parsed?.mode || "dark");
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setMode(store.get("mode") || "dark");
    setLoaded(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("https://kylepeacock.substack.com/api/v1/free?nojs=true", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then(() => {})
      .catch((error) => {
        setError(error);
        debugger;
      });
  };

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
