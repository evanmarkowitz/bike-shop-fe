import React, { Component } from 'react';
import Header from './Header'
import Meta from './Meta'
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'

const theme = {
  black: '#393939',
  blue: '#3FB6A7'
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`



class Page extends Component {
  render() {
    return ( 
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageWrapper>
          <Meta />
          <Header />
          {this.props.children}
        </PageWrapper>
      </ThemeProvider>
    );
  }
}

const PageWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  color: ${props => props.theme.black};
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  height: 100vh;
  width: 100vw;
  margin: 0;
`


export default Page;