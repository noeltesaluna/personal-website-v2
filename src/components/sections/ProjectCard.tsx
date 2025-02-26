import { 
    Flex,
    Heading,
    Image,
    Text,
    Link
} from "@chakra-ui/react"
import { FaGithub, FaExternalLinkAlt  } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Tooltip } from "@/components/ui/tooltip"

import ProjectSkill from "./ProjectSkill"

interface ProjectCardProps {
    heading: string
    description: string
    items: string[]
    link_url?: string
    github_url?: string
    tool_tip?: string
}



function ProjectCard({heading, description, items, link_url, github_url, tool_tip}: ProjectCardProps) {
    
    const skills = 
        <Flex direction={'row'} gap={'0.5em'} flexWrap={'wrap'}>
            {items.map((item) =>
                <ProjectSkill item={item} />    
            )}
        </Flex>
    
    const links =
        <Flex direction={'row'} gap={'0.5em'} pb={'1.5em'}>
            {link_url && <Link href={link_url} color={'black'}>
                <FaExternalLinkAlt size={'1.5em'}/>
            </Link>}
            {github_url && <Link href={github_url} target="_blank" color={'black'}>
                <FaGithub size={'1.5em'} />
            </Link>}
            {tool_tip && <Tooltip content={tool_tip} openDelay={0}>
                <IoMdInformationCircleOutline  size={'1.5em'} />
            </Tooltip>}
        </Flex>

    return (
        <Flex width={'100vh'}>
            <Image src='loopcinemas.png' maxWidth={'50vh'}/>
            <Flex  my='0.5em' pl={'2em'} direction={'column'}>
                <Heading>{heading}</Heading>
                <Text my='1em'>{description}</Text>
                {links}
                {skills}
            </Flex>
            
    </Flex>
  )
}

export default ProjectCard