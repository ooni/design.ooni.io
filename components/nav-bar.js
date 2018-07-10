import React from 'react'
import { withRouter } from 'next/router'
import NLink from 'next/link'

import styled from 'styled-components'

import {
  Link,
  Flex,
  Box,
  Container,
  Text,
  Heading
} from 'ooni-components'

const StyledNavItem = styled.div`
  display: block;
  a {
    color: ${props => props.active == true ? props.theme.colors.blue3 : props.theme.colors.white};
    text-decoration: none;
  }
  a:hover {
    color: ${props => props.theme.colors.blue3};
    text-decoration: none;
  }
`

const NavItemComponent = ({router, label, href}) => {
  const active = router.pathname === href
  return (
    <StyledNavItem active={active}>
      <Link href={href}>
        <NLink href={href}>
          {label}
        </NLink>
      </Link>
    </StyledNavItem>
  )
}
const NavItem = withRouter(NavItemComponent)

const StyledNavBar = styled.div`
  background-color: ${props => props.theme.colors.gray7};
  padding-top: 16px;
  padding-bottom: 20px;
  height: 100%;
  min-height: 100vh;
`

const SiteTitle = styled(Heading)`
font-weight: 300;
font-size: 24px;
color: ${props => props.theme.colors.white};
`

const NavBar = ({color}) => (
  <StyledNavBar color={color}>
    <Container>
      <SiteTitle>OONI Design</SiteTitle>
      <NavItem label='Home' href='/' />
      <NavItem label='Getting Started' href='/getting-started' />
      <NavItem label='Typography' href='/typography' />
      <NavItem label='Colors' href='/colors' />
      <NavItem label='Icons' href='/icons' />
      <NavItem label='Brand' href='/brand' />
    </Container>
  </StyledNavBar>
)

export default NavBar
