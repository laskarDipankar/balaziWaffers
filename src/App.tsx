import { Box } from "@mui/material";
import "./App.css";
import { Bodylayout } from "./layouts/BodyMargin/index";
import LandingPage from "./Pages/LandinPage/index";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Bodylayout>
          <LandingPage />
        </Bodylayout>
      </RecoilRoot>
    </div>
  );
}

export default App;
