import React from 'react'
import { withRouter } from 'next/router'
import NLink from 'next/link'

import styled from 'styled-components'

import {
  Link,
  Flex,
  Box,
  Container
} from 'ooni-components'

const StyledNavItem = styled.div`
  display: block;
`

const NavItemComponent = ({router, label, href}) => {
  const active = router.pathname === href
  return (
    <StyledNavItem>
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
  background-color: ${props => props.color || props.theme.colors.gray5};
  padding-top: 16px;
  padding-bottom: 20px;
  min-height: 100vh;
`

const NavBar = ({color}) => (
  <StyledNavBar color={color}>
    <Container>
      <NavItem label='Home' href='/' />
      <NavItem label='Getting Started' href='/getting-started' />
      <NavItem label='Typography' href='/typography' />
      <NavItem label='Colors' href='/colors' />
      <NavItem label='Brand' href='/brand' />
    </Container>
  </StyledNavBar>
)

export default NavBar
