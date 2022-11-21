import { Box, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import Loading from '../../layout/ui/loading/loading';
import { LocalRepository } from '../../repositories/local-repository';

export default function Contact() {
  const { t } = useTranslation();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['getContacts'],
    queryFn: LocalRepository.getContacts,
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return <span>Error</span>;
  }
  return (
    <Box
      p="4"
      maxW="sm"
      borderWidth="2px"
      borderRadius="none"
      borderColor="black"
      position="absolute"
      top="50%"
      left="50%"
      transform="translateY(-50%, -50%)"
    >
      {data.map((contact: any) => (
        <Text fontSize="2md" noOfLines={1} key={contact.id}>
          {t(contact.i18n)} - {contact.value}
        </Text>
      ))}
    </Box>
  );
}
