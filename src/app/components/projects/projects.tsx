import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Error, { ERRORS_LEVELS } from '../../layout/ui/error/error';
import Loading from '../../layout/ui/loading/loading';
import TabsContainer from '../../shared/components/tabs/tabs-container';
import { useProjects } from './hooks/use-projects';
import { Project as ProjectModel } from './models/project';
import Project from './ui/project';

export default function Projects(): JSX.Element {
  const { personalProjects, professionalProjects, isLoading, isError } = useProjects();
  const { t } = useTranslation();

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return (
      <Error
        title={t('projects.errors.notFound.title')}
        message={t('projects.errors.notFound.message')}
        level={ERRORS_LEVELS.CRITICAL}
      ></Error>
    );
  }

  return (
    <Box p="4" h="100%">
      <Heading pb="4">{t('projects.title')}</Heading>
      <TabsContainer
        tabsList={[t('projects.professional'), t('projects.personal')]}
        tabsPanels={[
          <SimpleGrid columns={4} spacing="40px" minChildWidth="350px">
            {personalProjects?.map((professionalProject: ProjectModel) => (
              <Project project={professionalProject} key={professionalProject.id}></Project>
            ))}
          </SimpleGrid>,
          <SimpleGrid columns={4} spacing="40px" minChildWidth="350px">
            {professionalProjects?.map((personalProject: ProjectModel) => (
              <Project project={personalProject} key={personalProject.id}></Project>
            ))}
          </SimpleGrid>,
        ]}
      ></TabsContainer>
    </Box>
  );
}
