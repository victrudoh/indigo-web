// Dependencies
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 4rem;
  /* padding-bottom: 2rem; */
  height: 100%;
  width: 100%;
  color: var(--text-muted);
  /* perspective: 100px; */
  /* background-color: purple; */

  @media screen and (max-width: 576px) {
    padding-top: 8rem;
  }

  @media screen and (max-width: 768px) {
    padding-top: 3rem;
  }
`;

export const Top = styled.div`
  /* background-color: green; */
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 5px;

  font-family: "Alata";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  @media screen and (max-width: 576px) {
  }

  @media screen and (max-width: 768px) {
  }
`;

export const Stream = styled.div`
  /* background-color: red; */
  width: 80%;
  margin: 0 auto;

  iframe {
    width: 100%;
    height: 500px;
    border-radius: var(--border-radius);

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 250px;
    }
  }
`;

export const Bottom = styled.div`
  width: 50%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  /* background-color: green; */

  @media screen and (max-width: 576px) {
    display: block;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 1rem auto;
    padding-bottom: 1rem;
  }
`;

export const Left = styled.div`
  /* background-color: red; */

  @media screen and (max-width: 576px) {
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-family: "Alata";
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 48px;
    color: var(--text-white);

    display: flex;
    align-items: center;
    letter-spacing: -0.015em;
    text-transform: capitalize;

    @media screen and (max-width: 576px) {
      font-size: 18px;
      line-height: 18px;
    }

    @media screen and (max-width: 768px) {
      font-size: 28px;
      line-height: 28px;
      display: block;
    }
  }

  .time {
    font-family: "Alata";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: var(--text-white);
    display: flex;
    align-items: center;

    @media screen and (max-width: 576px) {
      font-size: 10px;
      line-height: 14px;
    }

    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  .description {
    font-family: "Alata";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: var(--text-muted);
  }
`;

export const Right = styled.div`
  margin-top: 1rem;
  /* background-color: white; */

  @media screen and (max-width: 576px) {
  }

  @media screen and (max-width: 768px) {
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
  }

  a {
    text-decoration: none;
    color: var(--text-muted);

    &:hover {
      color: var(--text-white);
    }
  }

  ul {
    display: flex;
    gap: 2rem;

    @media screen and (max-width: 768px) {
      gap: 1rem;
      margin: 0 auto;
      /* background-color: orange; */
    }
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
`;

export const Related = styled.div`
  width: 90%;
  margin: 1rem auto;
  /* background-color: palevioletred; */
  padding: 1rem;
`;

export const RelatedTop = styled.div`
  font-family: "Aldrich";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: var(--text-white);

  display: flex;
  align-items: center;
  letter-spacing: -0.014em;

  margin: 1rem;
`;

export const RelatedScroll = styled.div`
  display: flex;
  overflow-x: auto;
  perspective: 1000px;
  background-color: #254164;
  box-shadow: 0 0 15px -6px #424242;
  padding: 1rem 0.5rem;
  border-radius: var(--border-radius);

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
`;

export const RelatedBottom = styled.div`
  display: flex;
  font-size: 12px;
  /* background-color: red; */
  width: 30%;
  margin: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }

  h3 {
    font-size: 12px;
  }

  ul {
    display: flex;
    list-style-type: none;
    gap: 1rem;
  }

  img {
    width: 25px;
    height: 25px;
    transition: all 300ms ease-in;

    &:hover {
      width: 35px;
      height: 35px;
    }
  }
`;
