// Dependencies
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 4rem;
  height: 100vh;
  width: 100%;
  background-color: var(--themeColor);
  color: black;
  background-image: radial-gradient(
    farthest-corner at top left,
    #4a7cae 0%,
    #234d76 25%,
    #16395c 50%,
    #0a2745 75%,
    #03182d 100%
  );

  @media screen and (max-width: 576px) {
    padding-top: 8rem;
  }

  @media screen and (max-width: 768px) {
    padding-top: 7rem;
    height: 100%;
  }
`;

export const Content = styled.div`
  /* background-color: green; */
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 8rem;
  width: 90%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    margin-top: 1rem;
    margin-bottom: 0;
  }
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0.5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const InputField = styled.div`
  display: flex;
  height: 63px;
  margin-top: 2rem;
  justify-content: center;
  /* background-color: red; */
  padding: 0 2rem;

  @media screen and (max-width: 576px) {
    height: 33px;
    margin-top: 0.5rem;
  }

  input {
    width: 456px;
    background: #052d56;
    border-radius: 5px 0px 0px 5px;
    border: none;
    color: var(--text-blue);
    padding: 1rem;

    &::placeholder {
      width: 174px;
      height: 27px;
      padding: 1rem;

      font-family: "Manrope";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;

      color: #3d6184;

      @media screen and (max-width: 576px) {
        font-size: 13px;
      }
    }
  }

  button {
    width: 174px;
    background: var(--text-yellow);
    border-radius: 0px 5px 5px 0px;
    border: none;

    font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: var(--text-white);

    &:hover {
      background: #e19a28;
    }

    @media screen and (max-width: 400px) {
      font-size: 9px;
      line-height: 10px;
      /* background: red; */
    }

    @media screen and (max-width: 576px) {
      font-size: 13px;
      padding: 0 0.5rem;
    }
  }
`;

export const LandingText = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 62px;
  line-height: 75px;
  margin-bottom: 1.5rem;

  letter-spacing: -0.04em;
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-weight: 800;
    font-size: 32px;
    line-height: 35px;
    margin-bottom: 1.5rem;
  }
`;

export const SmallerText = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;

  color: var(--text-blue);
  margin-bottom: 1rem;

  text-shadow: 0px 4px 11px rgba(0, 0, 0, 0.39);

  @media screen and (max-width: 576px) {
    font-size: 12px;
    line-height: 17px;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const ContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  max-height: 300px;
  width: 50%;
  margin: 1.5rem 2rem;
  padding: 0.5rem;
  /* background-color: yellow; */

  img {
    height: 300px;
    width: 100%;
    padding: 1rem;
    border-radius: var(--border-radius);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Bottom = styled.div`
  /* background-color: red; */
  width: 50%;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 1rem;

  @media screen and (max-width: 576px) {
    margin-top: 0rem;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    margin-top: 3rem;
  }

  ul {
    /* background-color: yellow; */
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 81.1px;
    height: 24.15px;

    &:hover {
      width: 91.1px;
      height: 34.15px;
    }

    @media screen and (max-width: 768px) {
      width: 41.1px;
      height: 14.15px;
    }
  }
`;
