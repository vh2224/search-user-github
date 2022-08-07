import { useState, useContext, useEffect } from "react";
import { Container } from "./styled";
import { UserContext } from "../../context/userContext";
import User from "../User/index";
import Input from "../../components/Input/index";
import Repository from "../Repository/index";

const Home = () => {
  const { getUserData, userRepos } = useContext(UserContext);

  const [userData, setUserData] = useState({});
  const [user, setUser] = useState("");
  const [repository, setRepository] = useState({});

  useEffect(() => {
    setRepository(userRepos);
  }, [userRepos]);

  let data = {}

  const handleGetData = async (e, user) => {
    if(e.type === 'keypress') {
      if(e.key === 'Enter') {
        data = await getUserData(user);
        setUserData(data);
        setUser("");
      }
    } else {
      data = await getUserData(user);
      setUserData(data);
      setUser("");
    }
  };

  const handleClearData = () => {
    setUserData({});
    setRepository({});
    setUser("");
  };

  return (
    <Container>
      <Input
        type={"text"}
        value={user}
        onChange={(e) => setUser(e.target.value)}
        onKeyPress={(e) => {
          handleGetData(e, user);
        }}
      >
        <button onClick={(e) => handleGetData(e, user)} type={'search'}>Buscar Usuario</button>
        {Object.keys(userData).length > 0 && (
        <button onClick={() => handleClearData()}>Limpar Dados</button>
      )}
      </Input>
      <User driver={userData} />
      {Object.keys(repository).length > 0 && (
        <Repository driver={repository} />
      )}
    </Container>
  );
};

export default Home;
