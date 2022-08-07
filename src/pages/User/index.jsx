import { useState, useContext } from 'react';
import { Container } from './styled';
import { UserContext } from '../../context/userContext';
import Repository from '../Repository/index';

const User = ({ driver }) => {

  const { getUserRepos } = useContext(UserContext);

  const [userRepos, setUserRepos] = useState([]);

  const handleGetUserRepos = async (user) => {
    let repos = await getUserRepos(user);
    setUserRepos(repos);
  };

  return (
    Object.keys(driver).length > 0 && (
      <Container>
        <img src={driver.avatar_url}/>
        <div>{driver.name}</div>
        <div>{driver.login}</div>
        <div>{driver.bio}</div>
        <div>{driver.public_repos}</div>
        <button onClick={() => handleGetUserRepos(driver.login)}>Buscar Repositorios</button>
        {Object.keys(userRepos).length > 0 && (
          <Repository driver={userRepos} />
        )}

      </Container>
    )
  );

};

export default User;