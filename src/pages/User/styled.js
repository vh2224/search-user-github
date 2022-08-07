import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #90969A;
  margin-top: 15px;
  border-radius: 2px;
  max-width: 270px;

  p {
    margin: 0;
    font-size: 18px;
    padding: 0;
    color: #1F282C;

    span {
      font-size: 14px;
      color: #DADFE2;
    }
  }

  button {
    height: 40px;  
    font-size: 20px;
    background-color: #F9C29D;
    border: none;
    border-radius: 5px;
    color: #FFF;
    margin-top: 10px;
    cursor: pointer;
  }

  img {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    border: 5px solid #DADFE2;
    margin-bottom: 15px;
  }

`;