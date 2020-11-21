/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import { CgList as Icon } from 'react-icons/cg';

const Logo: React.FC = () => {
  return (
    <Container>
      <Icon size={24} color="#CFA516" />
      <h1>
        vi<strong>Tracker</strong>
      </h1>
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  display: flex;
  align-items: center;

  h1 {
    color: white;
    font-size: 1.5rem;
    font-weight: 400;
    margin-left: 0.5rem;
  }
`;
