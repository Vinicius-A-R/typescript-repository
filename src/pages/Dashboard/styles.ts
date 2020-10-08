import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Title = styled.h1`
  max-width: 450px;

  color: #3a3a3a;
  line-height: 56px;
  font-size: 48px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;

    color: #a3a3a3;
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;

    border: 0;
    background: #04d361;
    border-radius: 0 5px 5px 0;

    color: #fff;
    font-weight: 700;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    display: flex;
    align-items: center;

    width: 100%;
    padding: 24px;
    text-decoration: none;
    background-color: #fff;
    border-radius: 4px;

    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(12px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        color: #3d3d4d;
        font-size: 20px;
      }

      p {
        color: #a8a8b3;
        font-size: 16px;
        margin-top: 4px;
      }
    }

    svg {
      color: #cbcbd6;
      margin-left: auto;
    }
  }
`;
