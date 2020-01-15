import React, { Component } from 'react';
import Header from './Header'
import Meta from './Meta'
import styled from 'styled-components'


class Page extends Component {
  render() {
    return (
      <PageWrapper>
        <Meta />
        <Header />
        {this.props.children}
      </PageWrapper>
    );
  }
}

const PageWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
`


export default Page;