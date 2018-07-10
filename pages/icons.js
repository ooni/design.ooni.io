import React from 'react'
import Layout from '../components/layout'

import * as IconsMD from 'react-icons/lib/md'

import {
  Link,
  Flex,
  Box,
  Container,
  Text,
  Heading
} from 'ooni-components'


const MarkdownIcons = () => {
  return (
    <Flex wrap>
    {Object.keys(IconsMD).map(name => {
      return (
        <Box w={1/4} pb={3} pr={3}>
        {React.cloneElement(
          IconsMD[name](),
          {size: 40}
        )}
        <Text style={{wordWrap: 'break-word'}}>{name}</Text>
        </Box>
      )
    })}
    </Flex>
  )
}

export default () => <Layout>
  <Heading h={1}>Icons</Heading>
  <Text>In OONI design we use the Material Design iconset. Here is a reference
of all the icons.</Text>
  <MarkdownIcons />
</Layout>
