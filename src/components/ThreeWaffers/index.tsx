import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import chaat from "../../assets/img/chaat.svg";
import crcunchilli from "../../assets/img/crunchy-chilli.svg";
import tomato from "../../assets/img/tomato.svg";
import MiniWaffersCard from "../MiniWaffersCard/index";
const index = () => {
  return (
    <div>
      <Grid
        container
        maxWidth={"xl"}
        // lg={12}

        sx={{
          height: "28vh",
          pl: 10,
          pr: 10,
          justifyContent: "center",
          backgroundColor: "#006666",
          borderTopLeftRadius: "50px",
          borderTopRightRadius: "50px",

          border: "1px solid red",
          //   backgroundColor: "maroon",
        }}
      >
        <MiniWaffersCard />
      </Grid>
    </div>
  );
};

export default index;
