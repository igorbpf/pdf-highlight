import styled from "styled-components";

export const Container = styled.div`
  margin-top: ${(props) => `${props.height}px`};
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
