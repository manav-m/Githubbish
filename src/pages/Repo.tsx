import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import marked from "marked";
import { File, FileDetail } from "../types";
import { FileDisplay } from "../components";

interface RepoParams {
  userName: string;
  repoName: string;
}

const Repo = () => {
  const { userName, repoName } = useParams<RepoParams>();
  const [files, setFiles] = React.useState<Array<File>>([]);
  const [readme, setReadme] = React.useState<FileDetail>();
  const [repoLoading, setRepoLoading] = React.useState<Boolean>(true);
  const [readmeLoading, setReadmeLoading] = React.useState<Boolean>(true);

  React.useEffect(() => {
    const getRepo = async () => {
      const result = await axios.get(
        `https://api.github.com/repos/${userName}/${repoName}/git/trees/master?recursive=1`
      );
      if (result.data.tree) {
        setFiles(result.data.tree);
      }
      setRepoLoading(false);
    };
    setRepoLoading(true);
    getRepo();
  }, [userName, repoName]);

  React.useEffect(() => {
    const getReadme = async () => {
      const readmeFile = files.find(file => file.path === "README.md");
      if (readmeFile) {
        const result = await axios.get(readmeFile.url);
        setReadme(result.data);
      }
      setReadmeLoading(false);
    };
    setReadmeLoading(true);
    getReadme();
  }, [files])

  return (
    <div>
      <ul>
        {repoLoading
          ? <li>Loading repository</li>
          : files.map(file => (
            <FileDisplay key={file.path} file={file} />
          ))
        }
      </ul>
      <hr />
      {readmeLoading
        ? <span>Loading readme</span>
        : readme?.content &&
        <div dangerouslySetInnerHTML={{ __html: marked(atob(readme.content)) }} />
      }
    </div>
  );
};

export default Repo;