import React, { PureComponent } from 'react';
import styled from 'styled-components'

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <LogoWrapper>
          <Logo src='/wheels.png' />
          <Headline>BIKE SHOP</Headline>
        </LogoWrapper>
        <p>Certified Pre-Owned Bikes</p>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.section`
  box-sizing: border-box;
  padding: .5rem;
  border-bottom: 3px solid black;
`

const Logo = styled.img`
  height: 5em;
  padding: 0;
  margin-right: 1rem;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Headline = styled.h1`
  letter-spacing: .1em;
  font-size: 2rem;
`

export default Header;