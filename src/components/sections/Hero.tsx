import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { 
    Flex,
    HStack,
    Text,
    Heading,
    VStack,
    Image,
    Link
} from '@chakra-ui/react'


function Hero() {
  return (
    <Flex 
        p={'1em'}
        h={'100dvh'}
        w={'100dvw'}
        justify={'center'}
    >
        <Flex gap="10dvw" flexWrap={'wrap'} justify={'center'} align={'center'}>
            <VStack fontSize='xl' align={'flex-start'}>
                <Heading size='5xl' color={'cyan.500'} fontWeight={'bold'} pb={'0.5em'}>Hi, I'm Noel Tesaluna</Heading>
                <Text letterSpacing={'wide'} >I recently graduated with a Bachelor of Computer Science Degree.</Text>
                <Text letterSpacing={'wide'} >Currently I am working at the ATO as a System Analyst Intern.</Text>
                <Text letterSpacing={'wide'} >I have a strong passion for designing and creating software solutions.</Text>
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
            
            <Image src="portrait.jpg" width="30dvh" rounded="md"/>
            
        </Flex>
    </Flex>
  )
}

export default Hero
