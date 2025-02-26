import ProjectCard from './ProjectCard'
import { 
    Heading,
    Flex 
} from '@chakra-ui/react'
import projects from '../data/projects.json'

function Projects() {
  return (
    <Flex 
        h={'100vh'}
        w={"100%"}    
        justify={'flex-start'}
        align={'center'}
        direction={'column'}
    >
        <Heading size='4xl' color={'cyan.500'} fontWeight={'bold'} pb={'1em'}>PROJECTS</Heading>
        {projects.map((project) => <ProjectCard {...project}
        />)}
       
    </Flex>
  )
}

export default Projects