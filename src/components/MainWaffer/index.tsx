import { Card, CardMedia, Container, Grid } from "@mui/material";
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
                rotate: "-1.2deg",
                display: "flex",
                width: "300",
                alignSelf: "flex-start",
                position: "relative",
                bottom: "3rem",

                ml: "2rem",
              }}
            >
              <CardMedia
                component="img"
                width="300"
                // height="600"
                image={img}
                alt="Waffers"
                sx={
                  {
                    // mb: "4rem",
                  }
                }
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
