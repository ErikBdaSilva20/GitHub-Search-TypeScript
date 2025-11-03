import { toast } from "react-toastify";
import classes from "./SuggestedUsers.module.css";

type SuggestedUsersProps = {
  users: string[];
};

const SuggestedUsers = ({ users }: SuggestedUsersProps) => {
  const handleCopy = (username: string) => {
    navigator.clipboard.writeText(username);
    toast.success(`${username} copiado!`);
  };

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Usuários sugeridos</h3>
      <div className={classes.userList}>
        {users.map((username) => (
          <div
            key={username}
            className={classes.userItem}
            onClick={() => handleCopy(username)}
          >
            {username}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedUsers;
