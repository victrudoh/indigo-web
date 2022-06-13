// Dependencies
import styled from "styled-components";

export const Edikan = styled.div`
  label {
    margin: 0 1rem;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    color: var(--text-white);
    font-size: 20px;
    line-height: 20px;

    @media screen and (max-width: 768px) {
      font-size: 16px;
      line-height: 16px;
    }
  }

  input {
    padding: 0.3rem 1rem;
    border-radius: var(--border-radius);
    outline: none;
    background: transparent;
    backdrop-filter: blur(20px);
    background: linear-gradient(
      111.03deg,
      rgba(239, 238, 238, 0.32) 2.82%,
      rgba(239, 238, 238, 0.06) 90.94%
    );
  }
`;
