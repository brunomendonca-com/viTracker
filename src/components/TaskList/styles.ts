import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 40px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #5f8ea0;
      font-weight: normal;
      padding: 80px 32px 8px;
      text-align: center;

      &:first-child {
        text-align: left;
        width: 50%;
      }

      &:nth-last-child(2) {
        width: 15%;
      }

      &:last-child {
        width: 10%;
      }
    }

    td {
      padding: 24px 32px;
      border: 0;
      background: #fff;
      text-align: center;

      &:first-child {
        border-radius: 8px 0 0 8px;
        text-align: left;
      }

      &:last-child {
        border-radius: 0 8px 8px 0;
        background: #fbfbfb;
      }

      h4 {
        color: #003644;
      }

      .buttonGroup {
        height: 24px;
        padding-top: 6px;
        display: flex;
        flex-basis: auto;
        align-items: center;
        justify-content: space-between;

        button {
          background: none;
          border: none;
          color: #97afb9;

          transition: all 250ms ease;
        }

        .saveButton:hover {
          color: #12a454;
        }

        .closeButton:hover {
          color: #e83f5b;
        }

        .editButton:hover {
          color: #003644;
        }
      }
    }
  }
`;

interface StatusButtonProps {
  state?: string;
}

export const StatusButton = styled.button`
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
  border-radius: 36px;
  color: white;
  padding: 8px 16px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;

  height: 50%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 300ms ease;

  &:hover {
    background: #003644;
  }
`;
