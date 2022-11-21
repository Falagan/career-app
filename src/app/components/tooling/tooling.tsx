import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import Loading from '../../layout/ui/loading/loading';
import { LocalRepository } from '../../repositories/local-repository';
import { Tool as ToolModel } from './models/tool';
import Tool from './ui/tool';

export default function Tooling() {
  const { t } = useTranslation();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['ToolingLocalRepository'],
    queryFn: LocalRepository.getTools,
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return <span>Error</span>;
  }
  return (
    <Box p="4">
      <Heading pb="4">{t('tooling.title')}</Heading>
      <SimpleGrid columns={4} spacing="40px" minChildWidth="350px">
        {data.map((tool: ToolModel) => (
          <Tool tool={tool} key={tool.id}></Tool>
        ))}
      </SimpleGrid>
    </Box>
  );
}
