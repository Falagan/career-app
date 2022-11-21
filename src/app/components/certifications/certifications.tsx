import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import Loading from '../../layout/ui/loading/loading';
import { CareerRepository } from '../../repositories/career-repository';
import Certification from './ui/certification';

export default function Certifications() {
  const { t } = useTranslation();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['[Certifications]', 'getCertifications'],
    queryFn: CareerRepository.getCertifications,
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return <span>Error</span>;
  }
  return (
    <Box p="4">
      <Heading pb="4">{t('certifications.title')}</Heading>
      <SimpleGrid columns={4} spacing="40px" minChildWidth="350px">
        {data.map((certification: any) => (
          <Certification certification={certification}></Certification>
        ))}
      </SimpleGrid>
    </Box>
  );
}
