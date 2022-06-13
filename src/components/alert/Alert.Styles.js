// Dependencies
import styled from "styled-components";

export const Edikan = styled.div`
  padding-top: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: red;

  @media screen and (max-width: 576px) {
    /* padding-top: 8rem; */
  }

  @media screen and (max-width: 768px) {
    padding-top: 3rem;
  }
`;

export const Content = styled.div`
  background-color: green;
  padding: 0.5rem;
  width: 40%;

  @media screen and (max-width: 768px) {
  }
`;
