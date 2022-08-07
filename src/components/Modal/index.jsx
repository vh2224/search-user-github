import { Container, Content } from './styled';

const Modal = ({ children, onClick }) => {

  return (
    <Container>
      <Content>
        {children}
        <button class="close-modal" onClick={onClick}>Close</button>
      </Content>
    </Container>
  );


};

export default Modal;