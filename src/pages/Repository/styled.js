import styled from 'styled-components';

export const Container = styled.div`

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  overflow: auto;
  height: 350px;
  padding: 10px;
  background-color: #0D0D0E;
  border-radius: 5px;
  margin-top: 15px;

  .repo-data {
    flex: 1;
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
  }

`;