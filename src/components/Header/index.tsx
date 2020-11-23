import React from 'react';

import { Container, Button } from './styles';

import Logo from '../Logo';

interface HeaderProps {
  onAddNewTask: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddNewTask }: HeaderProps) => {
  return (
    <Container>
      <header>
        <nav>
          <Logo />
          <Button onClick={() => onAddNewTask()}>Add Task</Button>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
