import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { RepoProps } from "../types/repo";
import Repo from "../components/Repo";

import classes from "./Repos.module.css";
const Repos = () => {
  const { username } = useParams<{ username: string }>();
  const [repos, setRepos] = useState<RepoProps[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!username) return;

    const loadRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!res.ok) {
          setError(true);
          return;
        }

        const data: RepoProps[] = await res.json();

        const topRepos = data.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        setRepos(topRepos.slice(0, 10));
      } catch {
        setError(true);
      }
    };

    loadRepos();
  }, [username]);

  if (error) return <p>Erro ao carregar repositórios</p>;

  return (
    <div className={classes.container}>
      <div className={classes.repos}>
        <button className={classes.back} onClick={() => window.history.back()}>
          Voltar para home
        </button>
        <h2>
          Melhoresprojetos de
          <span className={classes.username}>{username}</span>
        </h2>
      </div>
      {repos.map((repo) => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default Repos;
