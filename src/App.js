import "./App.css";
import Header from "./components/Header/Header";
import SelectDetails from "./components/SelectDetails/SelectDetails";
import { createMuiTheme, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import CompoundInterest from "./pages/CompoundInterest/CompoundInterest";

function App() {
  const theme = createMuiTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: "#232423" }}>
        <Header />

        <Routes>
          <Route path="/" element={<SelectDetails />} />
          <Route
            path="/compound-interest-calculator"
            element={<CompoundInterest />}
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
