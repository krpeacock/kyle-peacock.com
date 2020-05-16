import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Typography from "typography";
import fairyGatesTheme from "typography-theme-fairy-gates";
import store from "store";
import "prismjs/themes/prism-twilight.css";
import { TitleAndDate, Date as BlogDate } from "../components/BlogComponents";
import { Link } from "gatsby";
import SEO from "../components/SEO";
const queryString = require("query-string");

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
    filter: ${props => (props.mode !== "light" ? null : `invert(100%)`)};
    background-image: none;
    color: blueviolet;
    border-bottom: 1px solid blueviolet;
    text-shadow: none;
    width: fit-content;
    &:focus,
    &:hover {
      transform: scale(1.1) !important;
    }
  }
  a:visited {
    color: blueviolet;
  }
  pre, code {
    text-transform: none;
  }
  * {
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
  bottom: 0;
  padding: 1rem;
  max-width: 100%;
  overflow-x: hidden;
  background: white;
  clear: both;
  background: var(--background);
  color: var(--text-color);
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
  const [mode, setMode] = useState(parsed?.mode);
  useEffect(() => {
    setMode(store.get("mode") || "light");
  }, []);

  return (
    <>
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
      <Footer>&copy; Kyle Peacock {new Date().getFullYear()}</Footer>
    </>
  );
};
