import React from 'react'
import { 
    Flex,
    HStack,
    Text,
    Heading,
    VStack
} from '@chakra-ui/react'

function About() {
  return (
    <Flex
        w={"100%"}    
        justify={'center'}
        pb={'10em'}
    >
        <HStack align={'flex-start'}>
            <VStack w={500} align={'flex-start'}>
                <Heading size='5xl' color={'cyan.500'} fontWeight={'bold'} pb={'0.5em'}>ABOUT</Heading>
                <Text fontSize='lg' letterSpacing={'wide'} lineHeight={'taller'} pb={'2em'}>I graduated from RMIT University in December 2024. During my three years at university, I developed a deep passion for the entire process of bringing projects to life. From brainstorming potential ideas to turning them into reality. There’s nothing quite as satisfying as seeing a concept evolve into a fully realized project. </Text>
                <Text fontSize='lg' letterSpacing={'wide'} lineHeight={'taller'}>While I'm not at my desk, I am probably playing volleyball, working out or traveling to a new place.</Text>
            </VStack>
            <VStack>
                <Heading size='5xl' color={'cyan.500'} fontWeight={'bold'} pb={'0.5em'}>SKILLS</Heading>
            </VStack>
        </HStack>
    </Flex>
  )
}

export default About
