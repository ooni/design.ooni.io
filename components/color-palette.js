import React from 'react'
import chroma from 'chroma-js'

import {
  Circle,
  Flex,
  Box,
  Text,
  Container
} from 'rebass'

export const ColorPalette = props => {
  const lumWhite = chroma('white').luminance(),
    lumBlack = chroma('black').luminance(),
    lumColor = chroma(props.color).luminance()
  const blackContrast = Math.round((lumColor + 0.05)/(lumBlack + 0.05) * 100)/100,
    whiteContrast = Math.round((lumWhite + 0.05)/(lumColor + 0.05) * 100)/100

  return (
  <div>
    <Box px={1} py={3}>
      <Box px={3} py={3} bg={props.color}>
      </Box>
      <Text bold>{props.name}</Text>
    </Box>
    <Flex pr={2}>
    <Box w={1/2} bg={props.color} mr={2} p={2}>
      <Text color='black'>{blackContrast}</Text>
    </Box>
    <Box w={1/2} bg={props.color} p={2}>
      <Text color='white'>{whiteContrast}</Text>
    </Box>
    </Flex>

  </div>
  )
}
export default ColorPalette
