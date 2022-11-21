import { useQueries } from '@tanstack/react-query';
import { GitHubRepository } from '../../../repositories/github-repository';
import { LocalRepository } from '../../../repositories/local-repository';
import { Project } from '../models/project';

type UseProjects = {
  personalProjects: Project[] | undefined;
  professionalProjects: Project[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

export const useProjects = (): UseProjects => {
  const [personalProjectsQuery, professionalProjectsQuery] = useQueries({
    queries: [
      {
        queryKey: ['[Projects]', 'getPersonalProjects'],
        queryFn: GitHubRepository.getRepositories,
        // staleTime: Infinity,
      },
      {
        queryKey: ['[Projects]', 'getProfesionalProjects'],
        queryFn: LocalRepository.getProfesionalProjects,
        // staleTime: Infinity,
      },
    ],
  });

  const isLoading = personalProjectsQuery.isLoading || professionalProjectsQuery.isLoading;
  const isError = personalProjectsQuery.isError || professionalProjectsQuery.isError;
  const personalProjects = personalProjectsQuery.data;
  const professionalProjects = professionalProjectsQuery.data;

  return { personalProjects, professionalProjects, isLoading, isError };
};
