import { Container, Content } from './styled';

const Modal = ({ children, onClick }) => {

  return (
    <Container>
      <Content>
        {children}
      </Content>
      <button onClick={onClick}>Close</button>
    </Container>
  );


};

export default Modal;