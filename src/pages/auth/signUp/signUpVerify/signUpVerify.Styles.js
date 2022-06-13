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
  /* background-color: red; */

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
  width: 50%;
  /* min-height: 50%; */
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 2rem;
  border-radius: var(--border-radius);
  background-color: #ffffff40;
  backdrop-filter: blur(50px);
  border-radius: 10px 0 0 10px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    margin: 1rem;
    font-size: 20px;
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
    width: 80%;
    /* padding-top: 4rem; */
  }
`;
