import SkillColumn from './SkillColumn'
import Skills from '../data/skills.json'
import { 
    Flex,
    Text,
    Heading,
} from '@chakra-ui/react'

function About() {
  return (
    <Flex
        w={'100dvw'}    
        justify={'center'}
        pb={'35vh'}
        p={'1em'}
    >
        <Flex align={'flex-start'} gap={'5em'} flexWrap={'wrap'}>
            <Flex maxWidth={'500px'} align={'flex-start'} direction={'column'}>
                <Heading size='4xl' color={'cyan.500'} fontWeight={'bold'} pb={'0.5em'}>ABOUT</Heading>
                <Text fontSize='md' letterSpacing={'wide'} lineHeight={'taller'} pb={'2em'} whiteSpace="normal">I graduated from RMIT University in December 2024. During my three years at university, I developed a deep passion for the entire process of bringing projects to life. From brainstorming potential ideas to turning them into reality. There’s nothing quite as satisfying as seeing a concept evolve into a fully realized project. </Text>
                <Text fontSize='md' letterSpacing={'wide'} lineHeight={'taller'}>While I'm not at my desk, I'm probably playing volleyball, working out or travelling.</Text>
            </Flex>
            <Flex align={"flex-start"} flexWrap={'wrap'} direction={'column'}>
                <Heading size='4xl' color={'cyan.500'} fontWeight={'bold'} pb={'0.5em'}>SKILLS</Heading>
                <Flex align={"flex-start"} gap={{base: '2em', md: '5em'}} flexWrap={'wrap'}>
                    {Skills.map((skill) =>
                        <SkillColumn heading={skill.heading} items={skill.skills} />
                    )}
                </Flex>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default About
