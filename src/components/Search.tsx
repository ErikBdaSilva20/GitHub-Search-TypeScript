import classesStyled from "./Search.module.css";

type SearchProps = {
  loadUser: (username: string) => Promise<void>;
};

import { useState, type KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";

export const Search = ({ loadUser }: SearchProps) => {
  const [username, setUsername] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(username);
    }
  };

  return (
    <div className={classesStyled.search}>
      <h2>Busque por um usuário</h2>
      <p>Conheça seus repositórios</p>

      <div className={classesStyled.search_container}>
        <input
          type="text"
          placeholder="Usuário"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(username)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};
