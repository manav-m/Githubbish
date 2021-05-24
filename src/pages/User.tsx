import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { RepoDetails } from "../types";

interface UserParams {
  userName: string;
}

const User = () => {
  const { userName } = useParams<UserParams>();
  const [repos, setRepos] = React.useState<Array<RepoDetails>>([]);
  const [reposLoading, setReposLoading] = React.useState<Boolean>(true);

  React.useEffect(() => {
    const getRepos = async () => {
      const result = await axios.get(
        `https://api.github.com/users/${userName}/repos`
      );
      setRepos(result.data);
      setReposLoading(false);
    };
    setReposLoading(true);
    getRepos();
  }, [userName]);

  return (
    <div>
      <ul>
        {reposLoading
          ? <li>Loading Repos</li>
          : repos.map(repo => (
            <li key={repo.id}>
              <Link to={`/user/${userName}/repo/${repo.name}`}>{repo.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default User;