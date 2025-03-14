import ProjectCard from './ProjectCard'
import { 
    Heading,
    Flex 
} from '@chakra-ui/react'
import projects from '../data/projects.json'

function Projects() {
  return (
    <Flex 
      w={'100dvw'}   
      justify={'flex-start'}
      alignItems={{base: 'flex-start', md: 'center'}}
      direction={'column'}
      p={'1em'}
      py={20}
      >
      <Heading size='4xl' color={'cyan.500'} fontWeight={'bold'} pb={'0.5em'}>PROJECTS</Heading>
    <Flex 
      justify={'flex-start'}
      alignItems={{base: 'flex-start', md: 'center'}}
      direction={'column'}
      gap={10}
      
      
    >
        
        {projects.map((project) => <ProjectCard {...project}
    />)}
       
    </Flex>
    </Flex>
  )
}

export default Projects