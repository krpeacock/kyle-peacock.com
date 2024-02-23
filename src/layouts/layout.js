import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Typography from "typography";
import fairyGatesTheme from "typography-theme-fairy-gates";
import store from "store";
import "prismjs/themes/prism-twilight.css";
import {
  TitleAndDate,
  BlogDate,
  StyledImage,
  Description,
  Column,
} from "../components/BlogComponents";
import { Link } from "gatsby";
import SEO from "../components/seo";
import ErrorBoundary from "../components/ErrorBoundary";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import "../main.scss";
import { MDXProvider } from "@mdx-js/react";
import { page_visits } from "../declarations/page_visits";
import { Search } from "../components/Search";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
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

const black = "black";
fairyGatesTheme.headerColor = black;
fairyGatesTheme.bodyColor = black;
fairyGatesTheme.linkColor = black;
const typography = new Typography(fairyGatesTheme);
typography.injectStyles();

const GlobalStyle = createGlobalStyle`
  :root {
    --background:  ${(props) =>
      props.mode === "light" ? "white" : "var(--dark-bg)"};
    --text-color: ${(props) =>
      props.mode === "light" ? "black" : "rgba(236, 236, 236, 0.85)"};
    --title-color: ${(props) =>
      props.mode === "light" ? "#415161" : "rgba(236, 236, 236, 0.85)"};
    --contrast-color: var(--red-violet);
    --button-background: ${(props) =>
      props.mode === "light" ? "var(--peacock-green)" : "var(--cancan)"};
    text-transform: ${(props) => (props.capitalize ? "none" : "lowercase")};
  }
  body {
    background-color: var(--background);
  }
  #provider {
    background-color: var(--background);
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
  background: var(--background);
  @media (min-width: 376px) {
    text-align: left;
  }
  @media (min-width: 767px) {
    width: 600px;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 1000px;
  }
  @media (min-width: 1280px) {
    width: 1200px;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-flow: column-reverse;
  align-items: baseline;
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
    margin-top: auto;
    margin-bottom: 1rem;
    overflow: hidden;
    @media (min-width: 767px) {
      margin: initial;
    }
    iframe {
      position: absolute;
      top: -20px;
      background: transparent;
      margin-bottom: 0;
      max-width: 100%;
    }
  }
`;
const Button = styled.button`
  --size: 2.5rem;
  height: var(--size);
  width: var(--size);
  cursor: pointer;
  z-index: 1;
  border: 1px solid transparent;
  background-color: var(--peacock-green);
  color: white;
  font-size: calc(var(--size) / 3.5);
  border-radius: 100%;
`;

const Flex = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;
  background-color: var(--background-color);
`;

const Layout = ({ children, pageContext, location }) => {
  const parsed = queryString.parse(location?.search);
  const [visits, setVisits] = React.useState(null);
  const [mode, setMode] = useState(parsed?.mode || "dark");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const defaultMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    setMode(store.get("mode") || defaultMode);
    setLoaded(true);

    if (
      window &&
      window?.location?.href &&
      window?.location?.href.includes("localhost") === false
    ) {
      page_visits.getSummary(window.location.href).then((visitSummary) => {
        setVisits(visitSummary.total);
      });

      const deviceType =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
          ? { Mobile: null }
          : { Desktop: null };

      page_visits
        ?.log(window?.location?.href, deviceType)
        .then(async (response) => {
          console.log(response);
        });
    }
  }, []);

  return (
    <ErrorBoundary>
      <MDXProvider>
        {pageContext?.frontmatter?.title ? (
          <SEO {...pageContext?.frontmatter} />
        ) : null}
        <GlobalStyle mode={mode} capitalize={!!pageContext?.frontmatter} />

        <Provider id="provider" theme={defaultTheme} colorScheme={mode}>
          <Flex>
            <a href="/" style={{ marginRight: "auto" }}>
              Home
            </a>
            <Search />
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
          </Flex>

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
            {pageContext?.frontmatter?.title &&
            !pageContext.disableTitleAndDate ? (
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
        </Provider>
        <Footer mode={mode}>
          <section>
            <p>&copy; Kai Peacock {new Date().getFullYear()}</p>
            {visits ? <p>This page has been viewed {visits} times</p> : null}
          </section>
        </Footer>
      </MDXProvider>
    </ErrorBoundary>
  );
};

const StyledColumn = styled(Column)`
  ${(props) => (props ? props.css : null)}
`;

export default Layout;
