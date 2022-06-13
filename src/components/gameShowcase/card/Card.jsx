import React from "react";

// Styles
import { Wrapper, Content } from "./Card.Styles";

const Card = ({ title, bg }) => {
  return (
    <>
      <a href="/" className="text-decoration-none">
        <Wrapper bg={bg}>
          <Content>{title}</Content>
        </Wrapper>
      </a>
    </>
  );
};

export default Card;
