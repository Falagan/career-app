import { AddIcon } from '@chakra-ui/icons';
import { Box, HStack, Tag, TagLabel, TagLeftIcon, Text } from '@chakra-ui/react';

export default function ProgrammingLanguage({ programmingLanguage }: any) {
  return (
    <Box p="4" borderWidth="2px" borderRadius="none" borderColor="black">
      <HStack spacing={4}>
        <Tag borderRadius="none" size="lg" colorScheme="blackAlpha" variant="solid">
          <TagLeftIcon boxSize="12px" as={AddIcon} />
          <TagLabel> {programmingLanguage.name}</TagLabel>
        </Tag>
      </HStack>
      <br />
      <Text fontSize="2md" noOfLines={1}>
        {programmingLanguage.description}
      </Text>
      <Text fontSize="2md" noOfLines={1}>
        {programmingLanguage.level}
      </Text>
    </Box>
  );
}
