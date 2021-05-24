import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [userName, setUserName] = React.useState("");

  const onUserNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  };

  const redirectToUser = async () => {
    history.push(`/user/${userName}`);
  };

  return (
    <div className="container">
      <label htmlFor="userName">User Name</label>
      <input
        id="userName"
        className="input"
        name="userName"
        type="text"
        value={userName}
        onChange={onUserNameChange}
      />
      <button className="button" onClick={redirectToUser}>Get Repositories</button>
    </div>
  );
};

export default Home;