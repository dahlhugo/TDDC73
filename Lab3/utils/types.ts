export type RepoData = {
  title: string;
  description: string;
  license: string;
  commits: number;
  branches: number;
};

export type RootStackParamList = {
  Home: undefined;
  Details: { repo: RepoData };
};