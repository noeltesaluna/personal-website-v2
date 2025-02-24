import React from 'react'
import SkillColumn from './SkillColumn'
import Skills from '../data/skills.json'
import { 
    Flex,
    HStack,
    Text,
    Heading,
    VStack,
} from '@chakra-ui/react'

function About() {
  return (
    <Flex
        w={"100%"}    
        justify={'center'}
        h={'100vh'}
    >
        <HStack align={'flex-start'} gap={'5em'}>
            <VStack w={500} align={'flex-start'}>
                <Heading size='5xl' color={'cyan.500'} fontWeight={'bold'} pb={'0.5em'}>ABOUT</Heading>
                <Text fontSize='lg' letterSpacing={'wide'} lineHeight={'taller'} pb={'2em'}>I graduated from RMIT University in December 2024. During my three years at university, I developed a deep passion for the entire process of bringing projects to life. From brainstorming potential ideas to turning them into reality. There’s nothing quite as satisfying as seeing a concept evolve into a fully realized project. </Text>
                <Text fontSize='lg' letterSpacing={'wide'} lineHeight={'taller'}>While I'm not at my desk, I am probably playing volleyball, working out or travelling.</Text>
            </VStack>
            <VStack align={"flex-start"}>
                <Heading size='5xl' color={'cyan.500'} fontWeight={'bold'} pb={'0.5em'}>SKILLS</Heading>
                <HStack align={"flex-start"} gap={'5em'}>
                    {Skills.map((skill) =>
                        <SkillColumn heading={skill.heading} items={skill.skills} />
                    )}
                </HStack>
            </VStack>
        </HStack>
    </Flex>
  )
}

export default About
