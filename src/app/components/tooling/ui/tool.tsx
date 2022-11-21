import { AddIcon } from '@chakra-ui/icons';
import { Box, HStack, Link, Tag, TagLabel, TagLeftIcon, Text } from '@chakra-ui/react';

export default function Tool({ tool }: any) {
  return (
    <Box p="4" borderWidth="2px" borderRadius="none" borderColor="black">
      <HStack spacing={4}>
        <Tag borderRadius="none" size="lg" colorScheme="blackAlpha" variant="solid">
          <TagLeftIcon boxSize="12px" as={AddIcon} />
          <TagLabel> {tool.name}</TagLabel>
        </Tag>
        {tool.versions.map((v: string) => (
          <Tag color="green.500">v.{v}</Tag>
        ))}
      </HStack>
      <br />
      <Link href={tool.link} isExternal color="teal.500" noOfLines={1}>
        {tool.link}
      </Link>
      <Text fontSize="2md" noOfLines={1}>
        {tool.description}
      </Text>
      <Text fontSize="2md" noOfLines={1}>
        {tool.level}
      </Text>
    </Box>
  );
}
