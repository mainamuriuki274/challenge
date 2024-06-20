import { FC } from "react";
import NavBar from "./components/layout/NavBar";
import Hero from "./components/Hero";
import { Box, Container } from "@mui/material";
import Books from "./components/Books";
import ReadingList from "./components/ReadingList";

const App: FC = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          <ReadingList />
          <Hero />
        </Box>
        <Books />
      </Container>
    </main>
  );
};

export default App;
