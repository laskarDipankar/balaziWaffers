import React from "react";
import Header from "../../components/navbar/Header";
import Logo from "../../components/Logo/index";
import SearchBar from "../../components/SearchBar/index";
import { Box, Card, CardMedia, Divider, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "../../theme/navlink/index";
import { Heading, Subtitle } from "../../components/Typography";
import AddItemButton from "../../components/AddtoCartButton/index";
import QuantityButton from "../../components/AddItemQuantity/index";
import chilli from "../../assets/img/redchilli.svg";
import corn from "../../assets/img/corn.svg";
import fire from "../../assets/img/fire.svg";
import Waffers from "../../components/MainWaffer/index";
import ThreeWaffers from "../../components/ThreeWaffers/index";
import { useRecoilValue } from "recoil";
import { flavour } from "../../recoil/atom";

const heading = ["FLAMING HOT", "NACHOS"];

const Landing = () => {
  const flavourState = useRecoilValue(flavour);
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Container
          disableGutters={true}
          maxWidth="xl"
          fixed
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <Header />
          <SearchBar />
        </Container>
        <Container
          maxWidth="xl"
          disableGutters={true}
          sx={{
            // height: "100vh",
            padding: "0",
            // border: `1px solid red`,
          }}
        >
          <Grid
            container
            xl={12}
            maxWidth={"xl"}
            mt={6}
            sx={{
              display: "flex",
            }}
          >
            <Grid item xl={5}>
              <Container
                disableGutters={true}
                sx={{
                  height: "100%",
                  // backgroundColor: "yellow",
                  padding: "0",
                }}
              >
                <Grid container maxWidth={"sm"} xl={12}>
                  <Grid
                    item
                    xl={12}
                    mt={6}
                    sx={{
                      height: "40vh",
                    }}
                  >
                    <Grid
                      item
                      xl={12}
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Grid item xl={9}>
                        <Heading>
                          FLAMING HOT <br />
                          NACHOS
                        </Heading>
                      </Grid>
                      <Grid
                        item
                        xl={3}
                        ml={
                          flavourState === chilli
                            ? 46
                            : flavourState === corn
                            ? 56
                            : flavourState === fire
                            ? 54
                            : "0.5rem"
                        }
                        mt={1.5}
                        sx={{
                          position: "absolute",
                        }}
                      >
                        <Card
                          sx={{
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            rotate: "6deg",
                          }}
                        >
                          <CardMedia
                            component="img"
                            height="180px"
                            width="160px"
                            z-index={-1}
                            sx={{
                              backgroundColor: "transparent",
                            }}
                            image={flavourState}
                          />
                        </Card>
                      </Grid>
                    </Grid>
                    <Subtitle>
                      Presenting the Classic Nachos with a Flaming Hot
                      <br /> Twist. It will Rock your taste buds with chilli &
                      Lime
                    </Subtitle>
                  </Grid>
                </Grid>
                <Grid
                  item
                  maxWidth={"sm"}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Grid item xs={12}>
                    <AddItemButton />
                  </Grid>
                  <Grid item xs={12}>
                    <QuantityButton />
                  </Grid>
                </Grid>
              </Container>
            </Grid>
            <Grid
              item
              xl={7}
              sx={{
                height: "100%",
              }}
            >
              <Waffers />
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xl={12}
              sx={{
                height: "10vh",
                // height: "100%",
                backgroundColor: "yellow",
              }}
            >
              <ThreeWaffers />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Landing;
