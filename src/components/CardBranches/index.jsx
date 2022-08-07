import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Container } from "./styled";

const CardBranch = ({ driver }) => {

  const { getCommits } = useContext(UserContext);

  const [commits, setCommits] = useState([]);

  const handleGetCommits = async (user, repo, branch) => {
    let commits = await getCommits(user, repo, branch);
    setCommits(commits);
  };

  console.log(commits);

  return (
    driver && (
      <Container>
        <div>{driver.branch.name}</div>
        <button
          onClick={() =>
            handleGetCommits(
              driver.user.owner.login,
              driver.user.name,
              driver.branch.commit.sha
            )
          }
        >
          Ver Commit
        </button>
        {Object.keys(commits).length > 0 && (
          <Container>
            <h5>Dados do ultimo Commit</h5>
            <div>{commits.commit.author.name}</div>
            <h5>Mensagem: {commits.commit.message}</h5>
          </Container>
        )}
      </Container>
    )
  );
};

export default CardBranch;
