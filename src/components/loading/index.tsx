import { useContext } from "react";
import PuffLoader from "react-spinners/PuffLoader";

import { ThemeContext } from "styled-components";

import { Container } from "./styles";

const Loading = () => {
  const {
    colors: { primary },
  } = useContext(ThemeContext);

  return (
    <Container height={120}>
      <PuffLoader color={primary} loading={true} size={180} />
    </Container>
  );
};

export default Loading;
