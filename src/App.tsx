import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import Doc from "~/pages/doc";
import GlobalStyle from "~/styles/global";
import light from "~/styles/themes/light";

const App: React.FC = () => {
  const theme = light;
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Doc} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
