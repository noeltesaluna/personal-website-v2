import { 
    Flex,
    Heading,
    Image,
    Text,
    Link
} from "@chakra-ui/react"
import { FaGithub, FaExternalLinkAlt, FaYoutube  } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Tooltip } from "@/components/ui/tooltip"

import ProjectSkill from "./ProjectSkill"

interface ProjectCardProps {
    heading: string
    description: string
    img_path: string
    items: string[]
    link_url?: string
    github_url?: string
    youtube_url?: string
    tool_tip?: string
}



function ProjectCard({heading, description, img_path, items, link_url, github_url, youtube_url, tool_tip}: ProjectCardProps) {
    
    const skills = 
        <Flex direction={'row'} gap={'0.5em'} flexWrap={'wrap'}>
            {items.map((item) =>
                <ProjectSkill item={item} />    
            )}
        </Flex>
    
    const links =
        <Flex direction={'row'} gap={'0.5em'} pb={'1.5em'}>
            {youtube_url && <Link href={youtube_url} target="_blank" color={'black'}>
                <FaYoutube size={'1.5em'}/>
            </Link>}
            {link_url && <Link href={link_url} target="_blank" color={'black'}>
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
        <Flex maxW={'1000px'} flexWrap={{base: 'wrap', md: 'nowrap'}} gap={'2dvw'}>
            <Heading display={{base: 'block', md: 'none'}}>{heading}</Heading>
            <Image src={img_path} w={{base: '100dvw', md: '20dvw'}}rounded="md"/>
            <Flex  my='0.5em' direction={'column'} align={'flex-start'}>
                <Heading display={{base: 'none', md: 'block'}} mb='1em'>{heading}</Heading>
                <Text mb='1em' >{description}</Text>
                {links}
                {skills}
            </Flex>
            
    </Flex>
  )
}

export default ProjectCard