import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import Typography from "typography";
import fairyGatesTheme from "typography-theme-fairy-gates";
import store from "store";
import { MDXProvider } from "@mdx-js/react";
import "prismjs/themes/prism-twilight.css";

const black = "black";
fairyGatesTheme.headerColor = black;
fairyGatesTheme.bodyColor = black;
fairyGatesTheme.linkColor = black;
const typography = new Typography(fairyGatesTheme);
typography.injectStyles();

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  html {
    font-family: 'Open Sans', sans-serif;
  }  
  body {
    margin: 0;
    min-height: 100vh;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    text-transform: lowercase;
    background: ${props => (props.mode === "light" ? "white" : `black`)};
    filter: ${props => (props.mode === "light" ? null : `invert(100%)`)};
    a {
    color: ${black};
    background-image: none;
    color: blueviolet;
    border-bottom: 1px solid blueviolet;
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
  background: white;
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

const Layout = ({ children }) => {
  const [mode, setMode] = useState("light");
  useEffect(() => {
    setMode(store.get("mode") || "light");
  }, []);

  return (
    <>
      <GlobalStyle mode={mode} />
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
      <Main>{children}</Main>
      <Footer>&copy; Kyle Peacock {new Date().getFullYear()}</Footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

console.log("test");
export default Layout;
