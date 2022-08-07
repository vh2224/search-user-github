import { useState, useContext, useEffect } from "react";
import { Container } from "./styled";
import { UserContext } from "../../context/userContext";
import User from "../User/index";
import Input from "../../components/Input/index";

const Home = () => {
  const { getUserData } = useContext(UserContext);

  const [userData, setUserData] = useState({});
  const [user, setUser] = useState("");

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
    setUser("");
  };

  return (
    <Container>
      <Input
        type={"text"}
        value={user}
        onChange={(e) => setUser(e.target.value)}
        onClick={(e) => handleGetData(e, user)}
        onKeyPress={(e) => {
          handleGetData(e, user);
        }}
      >
        Buscar
      </Input>
      <button onClick={() => handleClearData()}>Limpar</button>
      <User driver={userData} />
    </Container>
  );
};

export default Home;
