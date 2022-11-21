import { Project } from '../components/projects/models/project';

export const GitHubRepository = {
  getRepositories: async () => {
    const { REACT_APP_API_GITHUB_URL, REACT_APP_API_GITHUB_USER } = process.env;
    const response = await fetch(`https://${REACT_APP_API_GITHUB_URL}/users/${REACT_APP_API_GITHUB_USER}/repos`, {
      method: 'GET',
      headers: {
        Authorization: `token ${process.env.REACT_APP_API_GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const repositories = await response.json();
    let parsedRepositories: Project[];
    //TODO:Mappers Layer
    parsedRepositories = repositories.map((repo: any) => {
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        link: repo.clone_url,
        language: repo.language,
        technologies: [],
        initDate: '',
        endDate: '',
      };
    });

    return parsedRepositories;
  },
};
