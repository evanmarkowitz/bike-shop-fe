import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components'

const Nav = () => {
    return (
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
    );
}

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

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

export default Nav;