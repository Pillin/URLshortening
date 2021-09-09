import React from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 32px;
  align-items: center;
  @media (min-width: 769px) {
    width: auto;
    align-items: flex-start;
  }
`;
const Title = styled.h3`
  color: ${(props) => props.theme.colors.neutralWhite};
  font-weight: ${(props) => props.theme.typography.secondaryBold};
`;

const ListContainer = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
  }
  @media (min-width: 769px) {
    align-items: flex-start;
  }
`;
const ALink = styled.a`
  color: white;
  text-decoration: none;
  color: ${(props) => props.theme.colors.neutralGray};
  &:hover {
     color: ${(props) => props.theme.colors.primaryCyan};
  }
`;

const NavBar = (props) => {
  const { title, list } = props;
  return (
    <Container>
      <Title>{title}</Title>
      <ListContainer>
        {list.map((elem, index) => (
          <li key={index.toString()}>
            <ALink href={elem.url}>{elem.label}</ALink>
          </li>
        ))}
      </ListContainer>
    </Container>
  );
};

export default NavBar;
