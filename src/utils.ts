export interface TimelineDetail {
  time: string;
  description?: string;
}

export interface ProjectCommits {
  projectName: string;
  commits: Commits[];
}

export interface Commits {
  id: string;
  message: string;
  author: string;
  datetime: {
    date: string;
    time: string;
  };
}

export const normalize = (data: any): ProjectCommits => {
  return data;
};
