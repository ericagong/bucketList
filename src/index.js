import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/configStore/store";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme";

// TODO change light theme <-> darkTheme based on cookie!
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={lightTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
