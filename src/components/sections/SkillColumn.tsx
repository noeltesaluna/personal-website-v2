import { Flex, Heading, Text } from '@chakra-ui/react'

interface SkillColumnProps {
    heading: string
    items: string[]
}

function SkillColumn({heading, items}: SkillColumnProps) {
    return (
        <Flex align={'flex-start'} direction={'column'}>
            <Heading fontWeight={'bold'} mb={'8px'}>{heading}</Heading>
                <Flex align={'flex-start'} direction={{base: 'row', md: 'column'}} gapX={{base: '16px', md: '8px'}} gap='8px' flexWrap={'wrap'}>
                {
                    items.map((item) =>
                        <Text fontSize='md' letterSpacing={'wide'} >{item}</Text>
                    )
                }
            </Flex>
        </Flex>
    )
}

export default SkillColumn
