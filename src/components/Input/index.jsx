import { Container, Row } from "./styled";

const Input = ({children, type, placeholder, onChange, onClick, value, onKeyPress }) => {

  return (
    <Container>
      <Row type={type} placeholder={placeholder} onChange={onChange} value={value} onKeyPress={onKeyPress} />
      <button onClick={onClick}>
        {children}
      </button>
    </Container>
  );

};

export default Input;