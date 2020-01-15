import React, { PureComponent } from 'react';
import Link from 'next/link';
import styled from 'styled-components'

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <FlexWrapper>
          <div>
            <LogoWrapper>
              <Link href='/'>
                <LogoWrapper>
                  <Logo src='/wheels.png' />
                  <Headline>BIKE SHOP</Headline>
                </LogoWrapper>
              </Link>
            </LogoWrapper>
          </div>
          <div>
            <p>Cart</p>
          </div>
        </FlexWrapper>
        <FlexWrapper>
          <NavLeft>
            <Link href='/shop'>
              <NavLink>Shop</NavLink>
            </Link>
            <Link href='/sell'>
              <NavLink>Sell <span>//</span> Trade</NavLink>
            </Link>
          </NavLeft>
          <NavRight>
            <Link href='/signup'>
              <NavLink>SignUp</NavLink>
            </Link>
            <Link href='/order'>
              <NavLink>Order</NavLink>
            </Link>
            <Link href='/Account'>
              <NavLink>Account</NavLink>
            </Link>
          </NavRight>
        </FlexWrapper>
        <Search type='text' placeholder='search'/>
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

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Headline = styled.h1`
  letter-spacing: .1em;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  transform: skew(-8deg);
  :hover {
    color: ${props => props.theme.blue}
  }
`

const NavLink = styled.a`
  font-size: 1.25rem;
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

const NavLeft = styled.div`
  a {
    margin-right: 1rem;
  }
`

const NavRight = styled.div`
  a {
    margin-left: 1rem;
  }
  padding-bottom: .5rem;
`

const Search = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 1rem;
`



export default Header;