import ColorPalette from '../components/color-palette'

import { theme, Flex, Box } from 'ooni-components'

# Colors

## Brand colors

<div>
  <Flex wrap>
  <Box w={1/2}>
  <ColorPalette
    color={theme.colors.blue5}
    name="OONI Blue (blue5)"
  />
  </Box>
  <Box w={1/2}>
  <ColorPalette
    color={theme.colors.blue3}
    name="Light Blue (blue3)"
  />
  </Box>
  </Flex>
</div>

## Palette

Our color palette is adapted from [Open Color](https://yeun.github.io/open-color/), an open-source color scheme. All hues apart from `blue` are taken as-is from Open Color. The blue shades are adapted to include OONI's primary (`#0588CB`) and secondary (`#5DB8FE`) color.

Keep in mind when you are combining colors from different hues (for example for a data visualisation) be sure to pick ones that have some brightness variation (luminance).

As a concrete example if you wanted to create a categorical data visualisation,
you would want to pick `indigo5`, `yellow6`, `cyan7` (they have different number
so different brightnesses too!) and should **not** pick `indigo5`, `yellow5`
and `cyan5` (which all have the same brightness value and can appear very
similar to color blind people). Keep it accessible.


### Gray

<Flex wrap>
{Array.from(Array(10).keys()).map(n => {
  const colorName = 'gray'
  return (
    <Box w={1/2}>
    <ColorPalette
      color={theme.colors[`${colorName}${n}`]}
      name={`${colorName} ${n}`}
    />
    </Box>
  )
})}
</Flex>

### Blue

<Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'blue'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={theme.colors[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
</Flex>


### Indigo

  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'indigo'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={theme.colors[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>

### Violet

  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'violet'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={theme.colors[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>

### Fuschia

  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'fuschia'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={theme.colors[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>

### Pink

  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'pink'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={theme.colors[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>

### Red

  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'red'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={theme.colors[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>

### Orange

  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'orange'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={theme.colors[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>

### Yellow

  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'yellow'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={theme.colors[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>

### Lime

  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'lime'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={theme.colors[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>

### Green

  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'green'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={theme.colors[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>

### Teal

  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'teal'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={theme.colors[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>

### Cyan

  <Flex wrap>
  {Array.from(Array(10).keys()).map(n => {
    const colorName = 'cyan'
    return (
      <Box w={1/2}>
      <ColorPalette
        color={theme.colors[`${colorName}${n}`]}
        name={`${colorName} ${n}`}
      />
      </Box>
    )
  })}
  </Flex>
