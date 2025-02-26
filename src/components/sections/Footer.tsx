import { Flex, Text } from "@chakra-ui/react"

function Footer() {
  return (
    <Flex 
        w={'100dvw'}
        p={'1em'}
        justify={'center'}
    >
        <Text fontWeight={'light'}>
            Made by yours truly. Built with Vite.js and Tailwind CSS. Deployed with Netlify. 
        </Text>
    </Flex>
  )
}

export default Footer