import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  border: 2px solid white;
  border-radius: 8px;
  box-shadow: 0px 0px 16px rgba(0, 54, 68, 0.1);
  cursor: pointer;
  height: 136px;
  margin-right: 32px;
  padding: 24px 32px 32px;

  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;

  transition: all 250ms ease;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border: 2px solid #cfa516;
  }
`;

export const Description = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h4 {
    font-weight: 400;
  }
`;

export const DurationLabel = styled.div`
  align-items: flex-end;
  color: #003644;
  font-size: 2rem;
  font-weight: 600;
  justify-content: flex-start;
  line-height: 1.5rem;

  display: flex;
  flex: 1;
`;
