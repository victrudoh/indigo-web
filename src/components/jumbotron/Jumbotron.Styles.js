// Dependencies
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 80vh;
  width: 100%;
  background-color: var(--themeColor);
  /* padding-top: 3rem; */
  /* background-color: red; */

  @media screen and (max-width: 576px) {
    /* padding-top: 8rem; */
    padding: 1rem;
  }

  @media screen and (max-width: 768px) {
    height: 80%;
    /* padding-top: 1rem; */
  }
`;

export const Content = styled.div`
  /* background-color: green; */
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Left = styled.div`
  /* background-color: blue; */
  width: 50%;
  height: 100%;

  img {
    height: 500px;
    width: 400px;
    margin: 2rem auto;
  }

  @media screen and (max-width: 576px) {
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Right = styled.div`
  /* background-color: orange; */
  width: 50%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: left;

  @media screen and (max-width: 576px) {
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    text-align: center;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
  }

  h5 {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #71e5ff;

    @media screen and (max-width: 1000px) {
      font-size: 15px;
    }
  }

  span {
    font-weight: 800;
    font-size: 34px;
    line-height: 45px;

    @media screen and (max-width: 1000px) {
      font-size: 28px;
      line-height: 35px;
    }
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #81afdd;

    @media screen and (max-width: 1000px) {
      font-size: 16px;
      line-height: 25px;
    }

    b {
      color: #81afdd;
    }
  }

  h6 {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #ff8a71;

    @media screen and (max-width: 1000px) {
      font-size: 16px;
      line-height: 18px;
    }
  }
`;
