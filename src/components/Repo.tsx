import type { RepoProps } from "../types/repo.ts";
import classes from "./Repo.module.css";

type Props = {
  repo: RepoProps;
};

const Repo = ({ repo }: Props) => {
  return (
    <div className={classes.repo}>
      <div className={classes["repo-header"]}>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          🔗
          {repo.name}
        </a>
      </div>
      <div className={classes["repo-stats"]}>
        <span>⭐ {repo.stargazers_count}</span>
        <span>🔀 {repo.forks_count}</span>
      </div>
      {repo.language && (
        <div className={classes["repo-language"]}>📝 {repo.language}</div>
      )}
    </div>
  );
};

export default Repo;
