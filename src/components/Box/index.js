import styled from 'styled-components';

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 24px;
  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  
  
  .boxLink {
    font-size: 14px;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input {
    width: 100%;
    background-color: #F4F4F4;
    color: #333333;
    border: 0;
    padding: 12px 16px;
    margin-bottom: 12px;
    border-radius: 8px;
    ::placeholder {
      color: #333333;
      opacity: 0.6;
    }
  }
  button {
    border: 0;
    padding: 12px 12px;
    color: #FFFFFF;
    border-radius: 8px;
    background-color: #6F92BB;
  }
`; 

export default Box