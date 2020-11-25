import React from 'react';
import styled from 'styled-components';

const NoTasks: React.FC = () => {
  return (
    <Container>
      <h3>No tasks here...</h3>
      <p>Click "Add tasks" to start.</p>
    </Container>
  );
};

export default NoTasks;

const Container = styled.div`
  height: 300px;
  margin: 40px;
  text-align: center;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin-bottom: 16px;
  }
`;
