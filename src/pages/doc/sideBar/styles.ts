import styled from "styled-components";

export const Container = styled.div`
  width: 25vw;
  overflow: auto;
  color: rgb(119, 119, 119);
  background: linear-gradient(
    rgb(249, 248, 247),
    rgb(251, 250, 248) 46px,
    rgb(251, 251, 249) 120px,
    rgb(248, 247, 245) 35%,
    rgb(249, 248, 246)
  );
`;

export const Description = styled.div`
  padding: 1rem;

  h2 {
    margin-bottom: 1rem;
  }
`;

export const Highlights = styled.ul`
  list-style: none;
  padding: 0;
`;

export const HighlightLocation = styled.div`
  margin-top: 0.5rem;
  text-align: right;
  font-size: 10px;
`;

export const HighlightImage = styled.div`
  overflow: auto;
  max-width: 300px;
  border: 1px dashed;
  margin-top: 0.5rem;
`;

export const Highlight = styled.li`
  padding: 1rem;
  cursor: pointer;
  transition: background 140ms ease-in;
  border-bottom: 1px solid rgb(119, 119, 119);

  &:hover {
    background: rgba(58, 56, 52, 0.08);
  }
`;

export const Quote = styled.blockquote`
  padding: 0;
  margin: 0;
  margin-top: 0.5rem;
  quotes: "\201c""\201d";

  &:before {
    content: open-quote;
  }

  &:after {
    content: close-quote;
  }
`;
