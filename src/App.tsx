import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import Hero from './components/sections/Hero'
import About from './components/sections/About'

function App() {

  return (
    <Box bg={'white'} color={'black'}>
      <Hero/>
      <About/>
    </Box>
  )
}

export default App
