import { Box } from "@mui/material";
import "./App.css";
import { Bodylayout } from "./layouts/BodyMargin/index";
import LandingPage from "./Pages/LandinPage/index";

function App() {
  return (
    <div>
      <Bodylayout>
        <LandingPage />
      </Bodylayout>
    </div>
  );
}

export default App;
