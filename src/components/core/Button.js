import styled from "@emotion/styled";

export const CyanButton = styled.button`
  color: white;
  width: ${(props) => (props.width ? props.width : "200px")};
  padding: 16px;
  font-weight: ${(props) => props.theme.typography.primaryBold};
  border-radius: 20px;
  border: 0px;
  background-color: ${(props) => props.theme.colors.primaryCyan};
  
`;
