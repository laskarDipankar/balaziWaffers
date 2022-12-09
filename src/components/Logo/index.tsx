import { Card, CardMedia } from "@mui/material";
import logo from "../../assets/img/logobalazi.png";
import React from "react";

const Logo = () => {
  return (
    <div>
      {/* <img src={logo} alt="logo" /> */}
      <Card
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          height="150"
          sx={{
            backgroundColor: "transparent",
          }}
          image={logo}
        />
      </Card>
    </div>
  );
};

export default Logo;
