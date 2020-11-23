import styled from 'styled-components';

export const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.3);

  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background: #f1f3f3;
  border-radius: 16px;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 40px;
  padding: 64px;

  display: flex;
  align-items: center;

  input {
    border-radius: 8px;
    padding: 16px;
  }
`;
