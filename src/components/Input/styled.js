import styled from 'styled-components';

export const Container = styled.div`

  height: 40px;

  button {
    height: 100%;  
    font-size: 20px;
    background-color: #F9C29D;
    border: none;
    border-radius: 5px;
    color: #FFF;
    margin-left: 5px;
    cursor: pointer;
  }

`;

export const Row = styled.input`

  height: 100%;
  font-size: 20px;
  background-color: #90969A;
  color: #FFF;
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: none;
  }

`;