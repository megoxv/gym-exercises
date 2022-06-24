import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, ExerciseDetail } from "./pages";
import { StyledEngineProvider } from "@mui/material/styles";
import "./App.css";

import {
  Button,
  createTheme,
  Paper,
  ThemeProvider,
  Typography,
  CssBaseline
} from "@mui/material";
import { red } from "@mui/material/colors";

const App = () => {
  const theme = createTheme({
    spacing: 10,
    palette: {
      mode: "dark",
      customRibRed: {
        main: "#f36100",
      }
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <div className="bg-main-dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </div>
    </ThemeProvider>
  );
};

export default App;
