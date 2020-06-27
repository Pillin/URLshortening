import React from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  color: white;
`;
const ALink = styled.a`
  color: white;
`;

const NavBar = (props) => {
  const { title, list } = props;
  return (
    <Container>
      <Title>{title}</Title>
      <ul>
        {list.map((elem, index) => (
          <li key={index.toString()}>
            <ALink href={elem.url}>{elem.label}</ALink>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default NavBar;
