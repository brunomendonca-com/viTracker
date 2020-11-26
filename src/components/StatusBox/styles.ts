import styled from 'styled-components';
import { colors } from './index';

export interface StateProps {
  state: 'Planned' | 'In-Progress' | 'Completed';
}

export const Container = styled.div`
  background: white;
  border: 2px solid white;
  border-radius: 8px;
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
    transform: scale(1.02);
    border-color: ${({ state }: StateProps) => colors[state]};
    box-shadow: 0px 0px 16px rgba(0, 54, 68, 0.2);
  }

  &:active {
    transform: scale(1);
    box-shadow: none;
  }

  &.active-box {
    border-color: ${({ state }: StateProps) => colors[state]};
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
    color: ${({ state }: StateProps) => colors[state]};
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
