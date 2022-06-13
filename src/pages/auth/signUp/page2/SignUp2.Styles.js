// Dependencies
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5rem;
  padding-top: 4rem;
  height: 100%;
  width: 100%;
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
    height: 100%;
  }
`;

export const Content = styled.div`
  /* background-color: red; */
  width: 70%;
  /* min-height: 50%; */
  margin: 5rem auto;
  display: flex;

  @media screen and (max-width: 576px) {
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    padding-top: 4rem;
  }
`;

export const Left = styled.div`
  /* background-color: blue; */
  width: 30%;
  /* min-height: 500px; */
  background-color: #ffffff40;
  backdrop-filter: blur(50px);
  border-radius: 10px 0 0 10px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 576px) {
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Right = styled.div`
  /* background-color: greenyellow; */
  background-color: #ffffff40;
  backdrop-filter: blur(20px);
  width: 70%;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;

  @media screen and (max-width: 576px) {
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    border-radius: var(--border-radius);
    /* margin: 0 auto; */
  }
`;

export const Title = styled.div`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 48px;
  color: var(--text-yellow);
  display: flex;
  justify-content: end;
  margin-right: 4rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;

export const RightBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 48px;
    color: var(--text-black);
    float: left;
    display: flex;
    justify-content: start;
    margin-left: 4rem;

    @media screen and (max-width: 768px) {
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      margin: 1rem auto;
    }
  }

  h4 {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 48px;
    color: var(--text-black);
    display: flex;
    margin-left: 4rem;

    @media screen and (max-width: 768px) {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      margin: 1rem auto;
    }
  }

  h6 {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--text-black);
    display: flex;
    margin-left: 4rem;

    @media screen and (max-width: 768px) {
      font-weight: 500;
      font-size: 12px;
      line-height: 28px;
      margin: 0 auto;
    }
  }

  p {
    font-size: 12px;
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
`;

export const RecommendTop = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: green; */
  width: 80%;
  margin: 0 auto;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 768px) {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    margin: 1rem auto;
    width: 90%;
    padding-left: 2rem;
  }

  input {
    height: 1rem;
    border-radius: 50%;
  }

  label {
    padding: 0 2rem 0 0.2rem;
    color: var(--text-black);
    cursor: pointer;
  }
`;

export const RecommendBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: green; */
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    margin: 1rem auto;
  }

  .search {
    width: 100%;
    border-radius: var(--border-radius);
    outline: none;
    height: 3rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  h4 {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: var(--text-black);
    display: flex;
    justify-content: start;
    margin-left: 0;
    /* background-color: red; */

    @media screen and (max-width: 768px) {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      width: 50%;
      display: block;
      margin: 1rem auto;
    }
  }

  label {
    padding: 0 2rem 0 0.2rem;
    color: var(--text-black);
    cursor: pointer;
  }
`;
