import { Box } from '@chakra-ui/react'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Footer from './components/sections/Footer'

function App() {

  return (
    <Box 
      color={'black'} 
      data-state="open"
      _open={{
          animation: "fade-in 300ms ease-out",
      }}
    >
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
    </Box>
  )
}

export default App
