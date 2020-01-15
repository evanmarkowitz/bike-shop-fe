import React, { PureComponent } from 'react';
import Link from 'next/link';
import styled from 'styled-components'

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <LogoWrapper>
          <Link href='/'>
            <LogoWrapper>
              <Logo src='/wheels.png' />
              <Headline>BIKE SHOP</Headline>
              </LogoWrapper>
          </Link>
        </LogoWrapper>
        <div>
          <Link href='/buy'>
            <NavLink>Shop</NavLink>
          </Link>
          <Link href='/sell'>
            <NavLink>Sell <span>//</span> Trade</NavLink>
          </Link>
        </div>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.section`
  box-sizing: border-box;
  padding: .5rem;
  border-bottom: 3px solid ${prop => prop.theme.black};
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
  font-family: 'Roboto', sans-serif;
`

const NavLink = styled.a`
  font-size: 1.25rem;
  margin: 1rem;
  color: ${props => props.theme.black};
  :hover {
    color: ${props => props.theme.blue};
    span {
      color: ${props => props.theme.black};
    }
  }
  span {
    color: ${props => props.theme.blue};
  }
`



export default Header;