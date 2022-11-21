import { AddIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Code,
  HStack,
  Icon,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from '@chakra-ui/react';
import { Project as ProjectModel } from '../models/project';

type ProjectProps = {
  project: ProjectModel;
};

export default function Project(props: ProjectProps) {
  const { project } = props;
  return (
    <Box p="4" borderWidth="2px" borderRadius="none" borderColor="black">
      {/* Heading */}
      <HStack spacing={4}>
        <Tag borderRadius="none" size="lg" colorScheme="blackAlpha" variant="solid">
          <TagLeftIcon boxSize="12px" as={AddIcon} />
          <TagLabel> {project.name}</TagLabel>
        </Tag>
        <Tag borderRadius="none" position="relative">
          {project.language}
        </Tag>
      </HStack>
      <br />
      <Text fontSize="2md">{project.description}</Text>
      {/* Info */}
      <List spacing={3} pt="2">
        <ListItem hidden={!project.company}>
          <ListIcon as={ChevronRightIcon} />
          Empresa: {project.company}
        </ListItem>
        <ListItem hidden={!project.role}>
          <ListIcon as={ChevronRightIcon} />
          Rol: {project.role}
        </ListItem>
        <ListItem hidden={!project.context}>
          <ListIcon as={ChevronRightIcon} />
          Contexto: {project.context}
        </ListItem>
        <ListItem hidden={!project.link}>
          <ListIcon as={ChevronRightIcon} />
          Link:
          <Link pl="2" href={project.link} isExternal={true} color="teal.500">
            {project.link}
          </Link>
        </ListItem>
        <ListItem hidden={!project.cloneLink}>
          <ListIcon as={ChevronRightIcon} />
          Clone: {project.cloneLink}
        </ListItem>
        <ListItem hidden={!project.initDate}>
          <ListIcon as={ChevronRightIcon} />
          Fecha: {project.initDate} - {project.endDate}
        </ListItem>
      </List>
      {/* Techs */}
      <Stack direction="row" marginTop={2} wrap="wrap">
        <Icon as={ChevronRightIcon} hidden={!(project.technologies.length > 0)} />
        {project.technologies.map((technology: string, index: number) => (
          <Code children={technology} key={index} />
        ))}
      </Stack>
    </Box>
  );
}
