export interface TimelineDetail {
  time: string;
  description?: string;
}

export interface ProjectCommits {
  projectName: string;
  commits: Commits[];
}

export interface Commits {
  node_id: string;
  sha: string;
  message: string;
  author: string;
  datetime: {
    date: string;
    time: string;
  };
}
