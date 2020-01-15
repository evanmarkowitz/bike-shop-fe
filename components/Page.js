import React, { Component } from 'react';
import Header from './Header'
import Meta from './Meta'
import styled, {ThemeProvider} from 'styled-components'

const theme = {
  black: '#393939',
  blue: '#3FB6A7'
}


class Page extends Component {
  render() {
    return ( 
      <ThemeProvider theme={theme}>
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
`


export default Page;