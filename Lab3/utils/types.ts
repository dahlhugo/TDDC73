export type RepoData = {
  title: string;
  description: string;
  license: string;
  stars: number;
  forks: number;
};

export type RootStackParamList = {
  Home: undefined;
  Details: { repo: RepoData };
};