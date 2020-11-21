import styled from 'styled-components';

export const Container = styled.div`
  background: #003644;
  height: 208px;
  margin-bottom: 32px;

  header {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 32px 40px 0px;

    display: flex;
    flex-direction: column;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  background: none;
  border: 2px solid #cfa516;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  height: 48px;
  padding: 0 16px;

  transition: all 250ms ease;

  &:hover {
    background: #cfa516;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  margin-bottom: -32px;
`;