import { Box } from '@chakra-ui/react'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'

function App() {

  return (
    <Box bg={'white'} color={'black'}>
      <Hero/>
      <About/>
      <Projects/>
    </Box>
  )
}

export default App
