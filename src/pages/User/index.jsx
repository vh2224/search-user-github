import { useContext } from 'react';
import { Container } from './styled';
import { UserContext } from '../../context/userContext';

const User = ({ driver }) => {

  const { getUserRepos } = useContext(UserContext);

  const handleGetUserRepos = async (user) => {
    await getUserRepos(user);
  };

  return (
    Object.keys(driver).length > 0 && (
      <Container>
        <img src={driver.avatar_url}/>
        <p>Nome: <span>{driver.name}</span></p>
        <p>Usuario: <span>{driver.login}</span></p>
        <p>{driver.bio}</p>
        <p>Repositórios: <span>{driver.public_repos}</span></p>
        <button onClick={() => handleGetUserRepos(driver.login)}>Buscar Repositorios</button>
      </Container>
    )
  );

};

export default User;