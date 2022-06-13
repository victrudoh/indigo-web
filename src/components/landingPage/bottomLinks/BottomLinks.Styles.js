// Dependencies
import styled from "styled-components";

export const Bottom = styled.div`
  /* background-color: red; */
  width: 50%;
  margin: 0 auto;
  margin-top: 3rem;
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
    transition: all 300ms ease-in;

    &:hover {
      width: 61.1px;
      height: 14.15px;
    }

    @media screen and (max-width: 768px) {
      width: 41.1px;
      height: 14.15px;
    }
  }
`;
