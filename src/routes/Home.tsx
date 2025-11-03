import type { UserProps } from "../types/user.ts";

import { useState } from "react";

// Componentes
import { Search } from "../components/Search.tsx";
import Error from "../components/Error.tsx";
import SuggestedUsers from "../components/SuggestedUsers.tsx";
import User from "../components/User.tsx";

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (username: string) => {
    setError(false);
    setUser(null);
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    const { avatar_url, login, location, followers, following } = data;

    if (res.status === 404) {
      setError(true);
      return;
    }

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };
  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};
