import styled from 'styled-components';

interface StatusButtonProps {
  state?: string;
}
export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 64px;
`;

export const Header = styled.div`
  margin-bottom: 16px;
  text-align: center;
  display: flex;
  justify-content: space-between;

  div {
    &:first-child {
      padding-left: 24px;
    }
  }
`;

export const Row = styled.div`
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 16px rgba(0, 54, 68, 0.1);
  padding: 24px 0px;
  margin-bottom: 8px;
  width: 100%;

  display: flex;
  justify-content: space-between;

  transition: all 300ms ease;

  h4 {
    color: #003644;
    margin-bottom: 4px;
  }

  .task-description {
    margin-left: 24px;
    flex-direction: column;
    align-items: flex-start;
  }

  .closeButton {
    background: none;
    border: none;
    color: #97afb9;

    transition: all 300ms ease;

    &:hover {
      color: #e83f5b;
    }
  }

  &:hover {
    border-color: #cfa516;
    cursor: pointer;
  }
`;

export const Column = styled.div`
  display: flex;
  flex: 3;

  align-items: center;
  justify-content: center;

  &:first-child {
    flex: 6;
    justify-content: flex-start;
  }

  &:last-child {
    flex: 1;

    @media (max-width: 768px) {
      margin-right: 24px;
    }
  }
`;

export const Container = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 40px;
`;

export const StatusButton = styled.div`
  background: ${({ state }: StatusButtonProps) => {
    switch (state) {
      case 'Planned':
        return '#5F8EA0';
      case 'In-Progress':
        return '#CFA516';
      case 'Completed':
        return '#12a454';
      default:
        return '#BDBDBD;';
    }
  }};

  border: none;
  border-radius: 16px;
  color: white;

  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;

  padding: 8px 16px;
  width: 96px;
  white-space: nowrap;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 10px;
    width: 75%;
  }
`;
