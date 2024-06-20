import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/600.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ReadingListProvider } from "./contexts/ReadingListContext.tsx";

const theme = createTheme({
  palette: {
    text: {
      secondary: "#9da9aa;",
    },
    primary: {
      main: "#5acccc",
      light: "#cffafa",
      dark: "#28b8b8",
    },
    secondary: {
      main: "#335c6e",
    },
    background: {
      default: "#fff",
    },
  },
});

const client = new ApolloClient({
  uri: import.meta.env.VITE_BACKEND_URL,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <ReadingListProvider>
          <App />
        </ReadingListProvider>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
