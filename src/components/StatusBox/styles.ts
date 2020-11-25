import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  border: 1px solid white;
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

  transition: all 300ms ease;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border-color: #cfa516;
  }

  &.active-box {
    border-color: #cfa516;
    box-shadow: 0px 0px 16px rgba(207, 164, 22, 0.5);
  }

  @media (max-width: 768px) {
    margin: 0px 0px 8px;
    min-width: 240px;
    padding: 24px;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
  @media (max-width: 768px) {
    flex-direction: row-reverse;
    justify-content: flex-end;

    h4 {
      margin-left: 16px;
    }
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

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
