import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: -102px;
  padding: 0px 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
