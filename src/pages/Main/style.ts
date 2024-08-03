import styled from "styled-components";

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
`;

export const UserInfoContainer = styled.div`
  padding: 0 1rem;
  width: 100%;
  height: 15rem;
  background-color: ${(props) => props.theme.colors.mainColor};
  border-radius: 0 0 0 3rem;
`;
