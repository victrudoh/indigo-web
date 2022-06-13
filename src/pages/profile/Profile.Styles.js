// Dependencies
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 4rem;
  height: 100%;
  width: 100%;
  background-color: var(--themeColor);
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
  }
`;

export const Content = styled.div`
  width: 80%;
  min-height: 68vh;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  /* background-color: yellow; */
  padding: 1rem 3rem;

  @media screen and (max-width: 576px) {
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    width: 100%;
    /* height: auto; */
  }
`;

export const Left = styled.div`
  width: 35%;
  /* background-color: green; */
  /* height: 90%; */
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const LeftTop = styled.div`
  width: 97%;
  height: 80%;
  margin: 0 auto;
  background: rgba(14, 14, 14, 0.46);
  box-shadow: 0px 4px 75px rgba(0, 0, 0, 0.25);
  border-radius: 50px 50px 0 0;
  flex-direction: column;
  padding-bottom: 3rem;
  /* background-color: red; */
  font-family: "Lato";
  font-style: normal;
  line-height: 42px;
  text-align: center;
  font-weight: 400;

  @media (max-width: 768px) {
    height: 100%;
    border-radius: 50px;
    margin-bottom: 2rem;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 1rem;
  }

  .name {
    font-size: 40px;
  }

  .team {
    font-size: 18px;
    line-height: 28px;
    color: var(--text-purple);
    margin-bottom: 1rem;
  }

  .rank {
    font-size: 20px;
    line-height: 24px;
  }

  .id {
    margin-bottom: 2rem;
    font-size: 18px;
    line-height: 24px;
  }

  a {
    /* margin: 3rem; */
    border-radius: var(--border-radius);
    padding: 0.5rem 1rem;
    background-color: var(--text-purple);
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: var(--text-white);
    text-decoration: none;
    /* margin-bottom: 2rem; */

    &:hover {
      background-color: #574d95a6;
    }
  }
`;

export const LeftTopLogo = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 1rem;
  margin-top: 1rem;
  /* margin-bottom: 1rem; */
  /* background-color: yellow; */
  background-image: url(${(props) => props.logo});
  background-size: contain;
`;

export const LeftBottom = styled.div`
  height: 20%;
  /* height: 15%; */
  background-color: var(--text-white);
  border-radius: 8px 8px 50px 50px;

  .bottomDesign {
    height: 90%;
    width: 95%;
    margin: 0 auto;
    background-color: #122539;
    border-radius: 0 0 50px 50px;
    padding: 1rem;

    img {
      width: 25px;
      height: 25px;
      margin: 0 0.5rem;
      cursor: pointer;
      transition: all 300ms ease-in;

      &:hover {
        width: 20px;
        height: 20px;
      }
    }
  }

  @media screen and (max-width: 576px) {
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Right = styled.div`
  width: 60%;
  /* background-color: green; */
  height: 80%;
  border-radius: var(--border-various);
  margin: auto 0;
  display: flex;
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 700;

  gap: 1rem;

  @media screen and (max-width: 576px) {
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 3rem auto;
    width: 90%;
    justify-content: center;
    /* margin-bottom: 3rem; */
  }
`;

export const RightTitle = styled.div`
  /* background-color: red; */
  width: 20%;
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  /* margin: auto 0; */

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }

  .smallTitle {
    font-size: 15px;
    line-height: 19px;
  }

  .bigTitle {
    font-size: 35px;
    line-height: 45px;
  }
`;

export const RightBody = styled.div`
  width: 80%;
  margin: auto 0;
  background-color: var(--text-white);
  background-image: url(${(props) => props.bg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;

  @media (max-width: 768px) {
    border-radius: 50px;
    width: 100%;
  }

  .outer {
    overflow: hidden;
  }

  .inner .up {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #1b4166;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .inner .down {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #113253;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .inner .top {
    margin-top: -20px;
  }

  .inner .bottom {
    margin-top: -20px;
    margin-bottom: -22px;
  }

  .inner .left {
    float: left;
    margin-left: -20px;
  }

  .content {
    /* background-color: purple; */
    padding-top: 4rem;
    min-height: 300px;
    width: 80%;
    margin: 0 auto;
    font-family: "PT Sans";
    font-style: normal;

    .flexRow {
      /* background-color: orange; */
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
    }

    .item {
      display: flex;
      gap: 1rem;
      align-items: center;

      h4 {
        color: rgba(31, 44, 81, 0.8);
        font-family: "PT Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 28px;

        display: flex;
        align-items: center;
        text-align: right;

        @media (max-width: 768px) {
          font-size: 18px;
        }
      }

      h5 {
        color: rgba(31, 44, 81, 0.8);
        font-family: "PT Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 39px;

        @media (max-width: 768px) {
          font-size: 15px;
        }
      }
    }

    .doubleDeck {
      display: flex;
      flex-direction: column;

      h4 {
        color: rgba(31, 44, 81, 0.8);
        font-family: "PT Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 28px;

        @media (max-width: 768px) {
          font-size: 18px;
        }
      }

      h5 {
        font-size: 18px;
        color: rgba(31, 44, 81, 0.8);

        @media (max-width: 768px) {
          font-size: 15px;
        }
      }
    }
  }
`;
