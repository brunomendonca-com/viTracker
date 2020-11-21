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
        width:96px;
        background:#fbfbfb;
      }

      h4 {
        color: #003644;
      }

      .buttonGroup {
        color: #97afb9;
        height: 24px;
        padding-top: 6px;
        display: flex;
        flex-basis: auto;
        align-items: center;
        justify-content: space-between;

        .saveButton {
          cursor: pointer;
          transition: all 250ms ease;

          &:hover {
            color: #12a454;
          }
        }

        .closeButton {
          cursor: pointer;
          transition: all 250ms ease;

          &:hover {
            color: #e83f5b;
          }
        }

        .editButton {
          cursor: pointer;
          transition: all 250ms ease;

        &:hover {
          color: #003644;
        }
      }
    }
  }
`;
