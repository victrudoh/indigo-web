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

  .searchBar {
    /* background-color: green; */
    margin: 1rem auto;
    width: 90%;
    display: flex;
    justify-content: end;

    @media screen and (max-width: 768px) {
      margin-top: 4rem;
      /* display: none; */
    }
  }

  /* .searchBarDown {
    background-color: green;
    margin: 1rem auto;
    width: 90%;
    display: flex;
    justify-content: end;

    @media screen and (max-width: 768px) {
      margin-top: 4rem;
    }
  } */

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
  width: 90%;
  margin: 1.5rem auto;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(20px);
  border-radius: var(--border-radius-lg);

  @media screen and (max-width: 576px) {
    margin: 5rem auto;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 3rem;
  }
`;

export const Top = styled.div`
  height: 10%;
  /* background-color: greenyellow; */
  backdrop-filter: blur(20px);
  padding: 1rem;
  border-radius: var(--border-radius-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  color: var(--text-white);
  background: linear-gradient(
    111.03deg,
    rgba(239, 238, 238, 0.32) 2.82%,
    rgba(239, 238, 238, 0.06) 90.94%
  );
`;

export const TopLeft = styled.div`
  display: flex;
  gap: 2rem;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;

    @media screen and (max-width: 576px) {
      display: none;
    }
  }
`;

export const TopLeftText = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 30px;
    line-height: 40px;

    @media screen and (max-width: 576px) {
      font-size: 16px;
      line-height: 26px;
    }

    @media screen and (max-width: 768px) {
      font-size: 22px;
      line-height: 32px;
    }
  }

  h5 {
    font-size: 20px;
    line-height: 20px;

    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 16px;
    }
  }
`;

export const TopRight = styled.div`
  display: flex;
  gap: 1rem;
  /* background-color: red; */
  align-items: center;

  h4 {
    font-size: 40px;
    line-height: 47px;

    @media screen and (max-width: 768px) {
      font-size: 22px;
      line-height: 30px;
    }
  }

  h5 {
    font-size: 40px;
    line-height: 47px;
    color: var(--text-blue);

    @media screen and (max-width: 768px) {
      font-size: 25px;
      line-height: 37px;
    }
  }
`;

export const List = styled.div`
  backdrop-filter: blur(40px);
  height: 400px;
  width: 94%;
  margin: 1rem auto;
  padding: 1rem 0;
  overflow-y: auto;
  overflow-x: auto;
  /* background-color: red; */

  &::-webkit-scrollbar {
    width: 12px;
    margin: 0 1rem;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px var(--text-blue);
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    height: 300px;
    width: 100%;
  }

  .disappear {
    @media (max-width: 768px) {
      display: none;
    }
  }

  table,
  th,
  td {
    @media screen and (max-width: 576px) {
      border: 1px solid var(--text-white);
    }
  }

  td {
    min-width: 20px;
    max-width: 20px;

    @media screen and (max-width: 576px) {
      max-width: 100px;
      font-size: 10px;
    }
  }

  tr {
    transition: all 300ms;
  }

  tr:hover {
    color: var(--text-white);
    background: linear-gradient(
      111.03deg,
      rgba(239, 238, 238, 0.32) 2.82%,
      rgba(239, 238, 238, 0.06) 90.94%
    );
  }
`;

export const ListItem = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto;
  /* background-color: orangered; */

  @media screen and (max-width: 768px) {
    width: 90%;
    justify-content: space-between;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .numImgPair {
    background-color: red;
    display: flex;
    align-items: center;
    gap: 2rem;
    min-width: 100px;
    max-width: 120px;

    @media screen and (max-width: 768px) {
      margin-right: 0.5rem;
      min-width: 20px;
      max-width: 25px;
    }
  }

  .nameIdPair {
    background-color: red;
    display: flex;
    justify-content: space-evenly;
    min-width: 400px;
    /* max-width: 320px; */
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 768px) {
      gap: 0.5rem;
      min-width: 200px;
    }
  }

  .country {
    @media screen and (max-width: 768px) {
      margin: 0 0.5rem;
      display: none;
    }
  }

  .cityStatePair {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .rating {
  }
`;

export const Bottom = styled.div`
  /* background-color: magenta; */
  margin: 1rem 4rem;
  padding: 0.5rem;

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    text-decoration: none;
  }

  h6 {
    color: var(--text-white);

    &:hover {
      color: #ccc;
    }
  }
`;
