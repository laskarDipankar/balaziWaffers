import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
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
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                className="waffers-img"
                src={item.img}
                style={{
                  position: "absolute",
                  height: "25%",
                  objectFit: "contain",

                  marginRight: "13rem",
                  transition: "all 0.8s ease",
                }}
              />
              <Card
                sx={{
                  width: "60%",
                  height: "18vh",
                  marginLeft: "7.5rem",
                  borderRadius: "1rem",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "1rem",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "1rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    Price:"Rs. 100"
                  </Typography>
                </CardContent>
                <CardActionArea
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconButton
                    sx={{
                      height: "2rem",
                      width: "9rem",
                      borderRadius: "50px",
                      backgroundColor: "yellow",
                      marginLeft: "1rem",
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "1rem",
                        fontSize: "1rem",
                        color: "white",
                      }}
                    >
                      order now
                    </Typography>
                  </IconButton>
                </CardActionArea>
              </Card>
            </Box>
          </Grid>
        );
      })}
    </div>
  );
};

export default index;
