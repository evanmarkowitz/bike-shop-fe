import React, { PureComponent } from "react";
import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <FlexWrapper>
          <div>
            <LogoWrapper>
              <Link href="/">
                <LogoWrapper>
                  <Logo src="/wheels.png" />
                  <Headline>BIKE SHOP</Headline>
                </LogoWrapper>
              </Link>
            </LogoWrapper>
          </div>
          <div>
            <p>Cart</p>
          </div>
        </FlexWrapper>
        <Nav />
        <Search type="text" placeholder="search" />
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.section`
  box-sizing: border-box;
  padding: 0.5rem;
  border-bottom: 3px solid ${prop => prop.theme.black};
`;

const Logo = styled.img`
  height: 5em;
  padding: 0;
  margin-right: 1rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Headline = styled.h1`
  letter-spacing: 0.1em;
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
  transform: skew(-8deg);
  :hover {
    color: ${props => props.theme.blue};
  }
`;

const Search = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 1rem;
`;

export default Header;
