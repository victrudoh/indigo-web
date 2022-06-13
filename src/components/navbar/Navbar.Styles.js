// Dependencies
import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  perspective: 1000px;
  z-index: 1;
  width: 100vw;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff40;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 15px -6px #424242;
  border-radius: 0 0 30px 30px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    padding: 7px 0;
    /* background-color: red; */
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  a {
    text-decoration: none;
    color: var(--text-white);
  }
`;

export const Logo = styled.div`
  margin: 0 25px;

  img {
    width: 35px;
    height: 35px;
  }

  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const Inner = styled.div`
  display: flex;
  padding-top: 10px;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }

  li {
    padding: 5px 20px;

    @media screen and (max-width: 576px) {
      padding: 0.2rem;
    }

    a {
      color: var(--text-white);
      font-size: 1rem;
      text-decoration: none;
      position: relative;

      &:hover {
        color: var(--themeColor);
      }

      &::before {
        content: "";
        position: absolute;
        bottom: -7px;
        left: 43%;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        transition: 0.5s;
      }

      &:hover::before {
        background-color: var(--themeColor);
      }
    }
  }

  .signup {
    background-color: var(--text-yellow);
    color: var(--themeColor);
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    margin-bottom: 0.5rem;

    &:hover {
      color: var(--text-white);
      background-color: var(--text-yellow);
    }

    @media screen and (max-width: 576px) {
      padding: 0.2rem;
      font-size: 12px;
      color: var(--text-white);
    }
  }
`;
