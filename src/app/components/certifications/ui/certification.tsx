import { AddIcon } from '@chakra-ui/icons';
import { Box, HStack, Tag, TagLabel, TagLeftIcon, Text } from '@chakra-ui/react';
import { formatDate } from '../../../tools/dates-tools';

export default function Certification({ certification }: any) {
  return (
    <Box p="4" borderWidth="2px" borderRadius="none" borderColor="black">
      <HStack spacing={4}>
        <Tag borderRadius="none" size="lg" colorScheme="blackAlpha" variant="solid">
          <TagLeftIcon boxSize="12px" as={AddIcon} />
          <TagLabel> {certification.name}</TagLabel>
        </Tag>
      </HStack>
      <br />
      <Text fontSize="2md" noOfLines={1}>
        {certification.center}
      </Text>
      <br />
      <Text fontSize="2md" noOfLines={1} color="teal.500">
        {formatDate(certification.initDate, 'yyyy')} - {formatDate(certification.endDate, 'yyyy')}
      </Text>
    </Box>
  );
}
