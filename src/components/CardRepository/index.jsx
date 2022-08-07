import { useState, useContext } from "react";
import { Container } from "./styled";
import { UserContext } from "../../context/userContext";
import Modal from "../Modal";
import CardBranch from "../CardBranches";

const CardRepository = ({ driver }) => {

  const { getBranches } = useContext(UserContext);

  const [branches, setBranches] = useState([]);

  const getCreateDate = (date) => {
    let newDate = date.slice(0, 10);
    let dateFormatted = newDate.split('-');
    return `${dateFormatted[2]}/${dateFormatted[1]}/${dateFormatted[0]}`;
  };

  const handleGetBranches = async (user, branch) => {
    let branches = await getBranches(user, branch);
    setBranches(branches);
  };

  const handleClose = () => {
    setBranches([]);
  };

  console.log(branches);

  return (

    <Container>
      <div>{driver.name}</div>
      <div>{driver.language}</div>
      <div>{getCreateDate(driver.created_at)}</div>
      <button onClick={() => handleGetBranches(driver.owner.login, driver.name)}>Buscar Branches</button>
      {branches.length > 0 && (
        <Modal onClick={() => handleClose()}>
          {branches.map((branch, index) => {
            return (
              <CardBranch key={index} driver={{branch: branch, user: driver}} />
            )
          })}
        </Modal>
      )}
    </Container>

  );
  
};

export default CardRepository;