// Dependencies
import styled from "styled-components";

export const Wrapper = styled.div`
  /* padding-top: 4rem; */
  border-radius: var(--border-radius);
  min-width: 400px;
  height: 240px;
  background: "palevioletred";
  background-image: url(${(props) => props.bg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  /* padding: 0.5rem; */

  @media screen and (max-width: 576px) {
    /* padding-top: 8rem; */
  }

  @media screen and (max-width: 768px) {
    min-width: 200px;
    height: 120px;
  }
`;

export const Content = styled.div`
  height: 100%;
  color: var(--text-white);
  font-family: "Alata";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  text-align: left;
  padding: 0 1rem;
  padding-top: 50%;
  padding-bottom: 1rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 576px) {
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
    font-weight: 400;
  }
`;
