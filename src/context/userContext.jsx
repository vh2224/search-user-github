import { useState } from "react";
import { api } from '../services/api';
import { createContext } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {

  
  const [userRepos, setUserRepos] = useState([]);


  const getUserData = async ( user ) => {

    let userData = [];

    await api.get(`users/${user}`)
      .then(response => {
        userData = response.data;
      }).catch(error => {
        console.log(error);
      });
      return userData;

  };
  
  const getUserRepos = async ( user ) => {

    await api.get(`users/${user}/repos`)
      .then(response => {
        setUserRepos(response.data);
      }).catch(error => {
        console.log(error);
      });
  };

  const getBranches = async ( user, branch ) => {

    let branches = [];

    await api.get(`repos/${user}/${branch}/branches`)
      .then(response => {
        branches = response.data;
      }).catch(error => {
        console.log(error);
      });
      return branches;

  };

  const getCommits = async ( user, branch, commit ) => {

    let commits = [];

    await api.get(`repos/${user}/${branch}/commits/${commit}`)
      .then(response => {
        commits = response.data;
      }).catch(error => {
        console.log(error);
      });
      return commits;


  };


  // useEffect(() => {
  //   api.get('/transactions')
  //     .then(response => setNewTransactions(response.data));
  // }, []);

  // async function createTransaction(transaction) {

  //   const response = await api.post('/new-transaction', transaction);

  //   const newTransaction = response.data[0]

  //   setNewTransactions([...newTransactions, newTransaction]);

  // }


  return (
    <UserContext.Provider value={{ getUserData, getUserRepos, userRepos, getBranches, getCommits }}>
      {children}
    </UserContext.Provider>
  )

};

export default UserProvider;