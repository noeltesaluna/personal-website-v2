import ProjectCard from './ProjectCard'
import { 
    Heading,
    Flex 
} from '@chakra-ui/react'

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
        <ProjectCard 
        tool_tip='Due to RMITs academic integrity I cannot share the codebase :('
        heading={'LOOP CINEMAS'} description={'This is a full-stack movie application, featuring a catalog of movies, a "coming soon" section, user reviews, account creation, and an admin dashboard. Users can browse through detailed movie listings, stay updated on upcoming releases, and read and write reviews. Administrators have access to manage movie listings and reviews through a dedicated dashboard.'} 
            items={['React', 'JavaScript', 'Tailwind CSS', 'Express', 'Sequelize', 'MySQL']
            
            } 
        />
    </Flex>
  )
}

export default Projects