import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import chaat from "../../assets/img/chaat.svg";
import crcunchilli from "../../assets/img/crcunchiili.svg";
import tomato from "../../assets/img/tomoato.svg";

const arr = [
  {
    img: chaat,
    title: "Chaat Waffers",
  },
  {
    img: crcunchilli,
    title: "Crunchy Chilli Waffers",
  },
  {
    img: tomato,
    title: "Tomato Waffers",
  },
];

const index = () => {
  return (
    <div
      style={{
        width: "100vw",

        display: "flex",
      }}
    >
      {arr.map((item) => {
        return (
          <Grid
            direction={"row"}
            item
            xl={4}
            sx={{
              paddingTop: "2rem",
              alignItems: "center",
              //   border: `1px solid red`,
            }}
          >
            <Card
              sx={{
                display: "flex",
                maxWidth: 480,
                height: "30vh",
                // height: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                height="80px"
                // width="60px"
                image={item.img}
                z-index={-1}
                sx={{
                  padding: "1em 1em 0 1em",
                  backgroundColor: "transparent",
                }}
              />
              <CardContent>
                <Typography
                  sx={{
                    fontSize: "1.0rem",
                  }}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </div>
  );
};

export default index;
