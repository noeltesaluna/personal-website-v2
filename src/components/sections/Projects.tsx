import ProjectCard from './ProjectCard'
import { 
    Heading,
    Flex 
} from '@chakra-ui/react'
import projects from '../data/projects.json'

function Projects() {
  return (
    <Flex 
        w={"100%"}    
        justify={'flex-start'}
        align={'center'}
        direction={'column'}
        gap={10}
        pb={20}
    >
        <Heading size='4xl' color={'cyan.500'} fontWeight={'bold'} pb={'1em'}>PROJECTS</Heading>
        {projects.map((project) => <ProjectCard {...project}
    />)}
       
    </Flex>
  )
}

export default Projects