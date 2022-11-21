import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import Loading from '../../layout/ui/loading/loading';
import { LocalRepository } from '../../repositories/local-repository';
import { ProgrammingLanguage as ProgrammingLanguageModel } from './model/programming-language';
import ProgrammingLanguage from './ui/programmin-language';

export default function ProgrammingLanguages() {
  const { t } = useTranslation();
  const { isLoading, isError, data } = useQuery(['getProgrammingLanguages'], LocalRepository.getProgrammingLanguages);

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return <span>Error</span>;
  }
  return (
    <Box p="4">
      <Heading pb="4">{t('programminLanguage.title')}</Heading>
      <SimpleGrid columns={4} spacing="40px" minChildWidth="350px">
        {data.map((programmingLanguage: ProgrammingLanguageModel) => (
          <ProgrammingLanguage
            programmingLanguage={programmingLanguage}
            key={programmingLanguage.id}
          ></ProgrammingLanguage>
        ))}
      </SimpleGrid>
    </Box>
  );
}
