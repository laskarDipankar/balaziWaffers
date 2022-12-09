import { Card, CardMedia, Container, Grid } from "@mui/material";
import React from "react";
import img from "../../assets/img/balaziwaffer.svg";
import Flavours from "../../components/Flavours/index";

const Waffers = () => {
  return (
    <div>
      <Container disableGutters={true}>
        <Grid container>
          <Grid item xs={12} xl={7}>
            <Card
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                rotate: "-3deg",
                mb: "4rem",
              }}
            >
              <CardMedia
                component="img"
                width="300"
                height="700"
                image={img}
                alt="Waffers"
              />
            </Card>
          </Grid>
          <Grid item xl={5}>
            <Grid
              item
              xs={12}
              sx={{
                height: "100%",
              }}
            >
              <Flavours />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Waffers;
