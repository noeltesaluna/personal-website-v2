import { VStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'

interface SkillColumnProps {
    heading: string
    items: string[]
}

function SkillColumn({heading, items}: SkillColumnProps) {
    return (
        <VStack align={'flex-start'}>
            <Heading fontWeight={'bold'}>{heading}</Heading>
            {
                items.map((item) =>
                    <Text fontSize='lg' letterSpacing={'wide'} >{item}</Text>
                )
            }
        </VStack>
    )
}

export default SkillColumn
