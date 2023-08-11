import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./Themes/MyTheme";
import { IsConnectedProvider, DataProvider } from "./context/DataContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <IsConnectedProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </IsConnectedProvider>
    </ThemeProvider>
  </React.StrictMode>
);
