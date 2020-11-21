import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import StatusBox from './StatusBox';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <nav>
          <Logo />
          <Button onClick={() => alert('Click')}>Add Task</Button>
        </nav>
        <StatusContainer>
          <StatusBox status="Planned" duration={18900000} />
          <StatusBox status="In Progress" duration={16200000} />
          <StatusBox status="Completed" duration={7200000} />
        </StatusContainer>
      </header>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background: #003644;
  height: 208px;
  margin-bottom: 32px;

  header {
    max-width: 1120px;
    height: 100%;
    margin: 0 auto;
    padding: 32px 32px 0px;

    display: flex;
    flex-direction: column;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Button = styled.button`
  background: none;
  border: 2px solid #cfa516;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  height: 48px;
  padding: 0 16px;

  transition: all 200ms ease;

  &:hover {
    background: #cfa516;
  }
`;

const StatusContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  margin-bottom: -32px;
`;
