// Dependencies
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5rem;
  padding-top: 4rem;
  height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 576px) {
    padding-top: 8rem;
    padding: 1rem;
    background-color: var(--themeColor);
  }

  @media screen and (max-width: 768px) {
    padding-top: 7rem;
    padding: 1rem;
    height: 100vh;
  }
`;

export const Content = styled.div`
  /* background-color: red; */
  width: 70%;
  min-height: 50%;
  margin: 5rem auto;
  display: flex;
  background-color: #ffffff40;
  backdrop-filter: blur(20px);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;

  h4 {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 48px;
    color: var(--text-yellow);
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
      font-weight: 500;
      font-size: 30px;
      line-height: 28px;
      margin: 1rem auto;
    }
  }

  input {
    width: 80%;
    height: 3rem;
    margin-bottom: 1.5rem;
    border-style: hidden;
    border-bottom-style: groove;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    background-color: transparent;
    padding: 0.5rem;
    border-radius: 10px 10px 0 0;
    color: var(--text-black);
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 48px;
    outline-color: #ff7c00;

    &::placeholder {
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 48px;
      color: var(--text-muted);
    }
  }

  p {
    font-size: 18px;
    margin: 1rem;
    color: var(--text-black);
  }

  button {
    width: 80%;
    border-radius: 12px;
    color: var(--text-white);
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 48px;
    background-image: linear-gradient(to right, #ff7c00, #ffa800);
    border: none;

    &:hover {
      background-image: linear-gradient(to right, #ffa800, #ff7c00);
      width: 78%;
    }
  }

  @media screen and (max-width: 576px) {
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 4rem;
  }
`;
