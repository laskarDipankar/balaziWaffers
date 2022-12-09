import React from "react";
import { Grid, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { NavlinkTheme } from "../../theme/navlink/index";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

const navli = ["home", "about", "chips", "services"];

const Header = () => {
  return (
    <div>
      <ThemeProvider theme={NavlinkTheme}>
        <Grid
          container
          sx={
            {
              // border: "1px solid black",
            }
          }
        >
          <ListItem>
            {navli.map((item) => {
              return (
                <Grid item xs={12} m={3}>
                  <ListItemText primary={item.toUpperCase()} />
                </Grid>
              );
            })}
          </ListItem>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Header;
