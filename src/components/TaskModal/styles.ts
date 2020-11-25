import styled from 'styled-components';

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.5);

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
`;

export const Viewport = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background: none;
  border-radius: 16px;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.25);
  margin: 0 40px;
  max-width: 800px;
  min-width: 480px;

  display: flex;
  flex-direction: column;

  position: relative;

  .close-button {
    border: none;
    background: none;

    position: absolute;
    top: 16px;
    right: 16px;
  }
`;

export const Header = styled.header`
  background: #003644;
  border-radius: 16px 16px 0 0;
  color: #fff;
  height: 96px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  background: #f1f3f3;
  border-radius: 0 0 16px 16px;
  display: flex;
  flex-direction: column;
  padding: 64px;

  h2,
  h3,
  h4 {
    color: #003644;
    margin-bottom: 16px;
  }

  span {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
  }

  label {
    display: flex;
    flex: 1;
  }

  .details {
    margin-bottom: 32px;
  }

  .duration-status {
    display: flex;
    flex: 1;
    margin-bottom: 32px;
    padding: 0;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .duration {
    margin-right: 24px;

    display: flex;
    flex: 1;
    flex-direction: column;

    @media (max-width: 768px) {
      margin-bottom: 32px;
      margin-right: 0;
    }
  }

  .duration-fields {
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin: 0;
  }

  .spacing {
    width: 24px;
  }

  .status {
    margin-left: 24px;

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-self: center;

    @media (max-width: 768px) {
      margin: 0;
    }
  }

  input {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-left: 8px;
    padding: 16px;

    transition: all 300ms ease;

    display: flex;
    flex: 1;

    &:focus {
      border-color: #cfa516;
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }

    &[name='name'] {
      flex: 5;
    }

    &[name='description'] {
      flex: 5;
    }

    &[name='hours'] {
      padding: 16px 0 16px 16px;
      width: 64px;
    }

    &[name='minutes'] {
      padding: 16px 0 16px 16px;
      width: 64px;
    }

    &[name='status'] {
      margin: 0;
    }
  }

  .buttons {
    display: flex;
    justify-content: flex-end;

    button {
      background: none;
      border: 1px solid;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 600;
      padding: 8px 16px;
      transition: all 300ms ease;

      &:first-child {
        border-color: #5f8ea0;
        color: #5f8ea0;

        &:focus,
        &:hover {
          background: #5f8ea0;
          border-color: #5f8ea0;
          color: #fff;
        }
      }

      &:last-child {
        background: #005e65;
        border-color: #005e65;
        color: #fff;
        margin-left: 8px;

        &:focus,
        &:hover {
          background: #12a454;
          border-color: #12a454;
        }
      }
    }
  }
`;
