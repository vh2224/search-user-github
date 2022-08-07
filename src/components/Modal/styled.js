import styled from 'styled-components';

export const Container = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;

  .close-modal {
    position: absolute;
    top: -50px;
    right: -80px;
  }

`;

export const Content = styled.div`

  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  height: 350px;
  width: 350px;
  background-color: #1F282C;
  padding: 10px;

`;