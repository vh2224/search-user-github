import { Container } from "./styled";
import CardRepository from "../../components/CardRepository";

const Repository = ({ driver }) => {

  return (

    driver && (
      <Container>
        {driver.map((repo, index) => {
          return (
            <CardRepository key={index} driver={repo}/>
          );
        })}
      </Container>
    )

  );

};

export default Repository;