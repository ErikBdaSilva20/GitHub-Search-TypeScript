import type { UserProps } from "../types/user.ts";
import type { RandomUserProps } from "../types/randomUser.ts";

import { useEffect, useState } from "react";

// Componentes
import { Search } from "../components/Search.tsx";
import Error from "../components/Error.tsx";
import SuggestedUsers from "../components/SuggestedUsers.tsx";
import User from "../components/User.tsx";

// Supondo que você tenha uma função para buscar usuários aleatórios
import { fetchRandomUsers } from "../components/gitHubRandomFetch.ts";

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [suggestedUsers, setSuggestedUsers] = useState<string[]>([]);

  // Busca usuário pelo input
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

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  // Busca usuários aleatórios quando o componente monta
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
    <>
      <div>
        <Search loadUser={loadUser} />
        {user && <User {...user} />}
        {error && <Error />}
      </div>

      <div>
        <SuggestedUsers users={suggestedUsers} />
      </div>
    </>
  );
};
