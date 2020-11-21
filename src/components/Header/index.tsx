import React from 'react';

import { Container, Button, StatusContainer } from './styles';

import Logo from '../Logo';
import StatusBox from '../StatusBox';

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
          <StatusBox status="In-Progress" duration={16200000} />
          <StatusBox status="Completed" duration={7200000} />
        </StatusContainer>
      </header>
    </Container>
  );
};

export default Header;
