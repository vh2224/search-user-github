import { Container, Row } from "./styled";

const Input = ({children, type, placeholder, onChange, onClick, value, onKeyPress }) => {

  return (
    <Container>
      <Row type={type} placeholder={placeholder} onChange={onChange} value={value} onKeyPress={onKeyPress} />
      {children}
    </Container>
  );

};

export default Input;