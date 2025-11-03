import type { UserProps } from "../types/user.ts";

import { MdLocationPin } from "react-icons/md";

import classes from "./Users.module.css";

import { Link } from "react-router-dom";
const User = ({
  login,
  avatar_url,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <span className={classes.location}>
          <MdLocationPin />
          {location}
        </span>
      )}

      <div className={classes.stats}>
        <p>seguidores:</p>
        <p className={classes.number}>{followers}</p>
      </div>

      <div className={classes.stats}>
        <p>seguindo:</p>
        <p className={classes.number}>{following}</p>
      </div>

      <Link to={`/repos/${login}`}>Ver Melhores projetos</Link>
    </div>
  );
};

export default User;
