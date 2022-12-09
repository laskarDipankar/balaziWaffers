import React from "react";
import Header from "../../components/navbar/Header";
import Logo from "../../components/Logo/index";
import SearchBar from "../../components/SearchBar/index";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "../../theme/navlink/index";
import { Heading, Subtitle } from "../../components/Typography";
import AddItemButton from "../../components/AddtoCartButton/index";
import QuantityButton from "../../components/AddItemQuantity/index";

const heading = ["FLAMING HOT", "NACHOS"];

const index = () => {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Container
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
          sx={{
            height: "88vh",
          }}
        >
          <Grid container>
            <Grid item xs={12} mr={6} mt={6}>
              <Heading>
                FLAMING HOT <br />
                NACHOS
              </Heading>
              <Subtitle>
                Presenting the Classic Nachos with a Flaming Hot
                <br /> Twist. It will Rock your taste buds with chilli & Lime
              </Subtitle>
            </Grid>
          </Grid>
          <Grid
            item
            maxWidth={"sm"}
            sx={{
              display: "flex",
              justifyContent: "space-between",

              //   border: "2px solid red",
            }}
          >
            <Grid item xs={12} mt={6}>
              <AddItemButton />
            </Grid>

            <Grid item xs={12} mt={6}>
              <QuantityButton />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default index;
