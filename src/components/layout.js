import React from 'react'
import withHooks, { useState } from 'react-with-hooks'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'

const black = 'black'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  html {
    font-family: 'Open Sans', sans-serif;
  }  
  body {
    margin: 0;
    min-height: 100vh;
    width: 100vw;
    max-width: 100vw;
    overflow-x: hidden;
    text-transform: lowercase;
    background: white;
    filter: ${props => (props.mode === 'light' ? null : `invert(100%)`)};
  }
  a {
    color: ${black}
  }
  a:visited {
    color: blueviolet;
  }

`

const Main = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100vw;
  overflow-x: hidden;
  height: 100%;
  height: -webkit-fill-available;
  background: white;
  float: left;
  @media (min-width: 376px) {
    text-align: left;
    min-height: initial;
  }
`

const Footer = styled.footer`
  bottom: 0;
  padding: 1rem;
  max-width: 100vw;
  overflow-x: hidden;
  background: white;
  clear: both;
`
const Button = styled.button`
  --size: 2.5rem;
  height: var(--size);
  width: var(--size);
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  border: 1px solid black;
  background-color: white;
  border-radius: 100%;
`

const Layout = withHooks(({ children }) => {
  const pulledState = localStorage.getItem('darkmode') || 'light'
  const [mode, setMode] = useState(pulledState)
  return (
    <>
      <GlobalStyle mode={mode} />
      <Button
        type="button"
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      >
        {mode}
      </Button>
      <Main>{children}</Main>
      <Footer>&copy; Kyle Peacock {new Date().getFullYear()}</Footer>
    </>
  )
})

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
