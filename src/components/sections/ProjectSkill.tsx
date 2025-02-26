import { Box,Text } from "@chakra-ui/react"

function ProjectSkill({ item }: { item: string }) {
    return (
        <Box 
            borderColor={'cyan.500'}
            color={'cyan.500'}
            borderWidth={'2px'}
            rounded={'lg'}
            py={1}
            px={2.5}
        >
            <Text fontSize={'sm'} fontWeight={'bold'}>
            {item}
            </Text>
        </Box>
    );
  }
  
  export default ProjectSkill;