import classes from "./SuggestedUsers.module.css";

type Props = {
  users: string[]; // array de logins
};

const SuggestedUsers = ({ users }: Props) => {
  return (
    <div className={classes.container}>
      <h3>Usuários sugeridos:</h3>
      <div className={classes.list}>
        {users.map((username) => (
          <span key={username} className={classes.userName}>
            {username}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SuggestedUsers;
