import React from 'react'
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { 
    Flex,
    HStack,
    Text,
    Box,
    Heading,
    VStack,
    Image,
    Link
} from '@chakra-ui/react'


function Hero() {
  return (
    <Flex 
        h={'100vh'}
        w={"100%"}    
        justify={'center'}
    >
        <HStack gap="15vh">
            <VStack fontSize='xl' align={'flex-start'}>
                <Heading size='5xl' color={'cyan.500'} fontWeight={'bold'} pb={'0.5em'}>Hi, I'm Noel Tesaluna</Heading>
                <Text>I recently graduated as with a Bachelor of Computer Science Degree.</Text>
                <Text>Currently I am working at the ATO as a System Analyst Intern.</Text>
                <Text>I have a strong passion for designing and creating software solutions.</Text>
                <HStack pt={'1.5em'}>
                    <Link href="mailto:noel.anthony.t@gmail.com" color={'black'}>
                        <MdEmail size={'1.5em'}/>
                    </Link>
                    <Link href="https://github.com/noeltesaluna" target="_blank" color={'black'}>
                        <FaGithub size={'1.5em'} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/noel-tesaluna/" target="_blank" color={'black'}>
                        <FaLinkedin  size={'1.5em'} />
                    </Link>
                </HStack>
            </VStack>
            <Box>
                <Image src="portrait.jpg" height="250px" rounded="md"/>
            </Box>
        </HStack>
    </Flex>
  )
}

export default Hero
