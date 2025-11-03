import { useEffect, useState } from "react";
import type { UserProps } from "../types/user";
import type { RandomUserProps } from "../types/randomUser";

// Componentes
import { Search } from "../components/Search";
import User from "../components/User";
import SuggestedUsers from "../components/SuggestedUsers";
import Error from "../components/Error";

// Função para pegar usuários aleatórios
import { fetchRandomUsers } from "../components/gitHubRandomFetch";

// CSS do container pai
import classes from "./HomeContainer.module.css";

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [suggestedUsers, setSuggestedUsers] = useState<string[]>([]);

  const loadUser = async (username: string) => {
    setError(false);
    setUser(null);
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    if (res.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    setUser({ avatar_url, login, location, followers, following });
  };

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data: RandomUserProps[] = await fetchRandomUsers(10);
        setSuggestedUsers(data.map((u) => u.login));
      } catch (err) {
        console.error(err);
      }
    };

    loadUsers();
  }, []);

  return (
    <div className={classes.homeContainer}>
      <div className="searchWrapper">
        <Search loadUser={loadUser} />
      </div>

      {user && (
        <div className="userWrapper">
          <User {...user} />
        </div>
      )}

      {error && <Error />}

      {suggestedUsers.length > 0 && (
        <div className="suggestedWrapper">
          <SuggestedUsers users={suggestedUsers} />
        </div>
      )}
    </div>
  );
};
