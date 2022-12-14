import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton, Paper } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Container } from "@mui/system";

const AddItemButton = () => {
  return (
    <div>
      <Paper
        component="form"
        sx={{
          borderRadius: "50px",
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 250,
          height: 84,
          backgroundColor: "black",

          alignSelf: "flex-start",
        }}
      >
        <IconButton
          sx={{
            borderRadius: "50%",
            backgroundColor: "yellow",
            m: "4px",
          }}
        >
          <ShoppingCartIcon
            // fontSize="large"

            sx={{
              fontSize: "2.8rem",
              color: "white",
              m: "2",
            }}
          />
        </IconButton>
        <IconButton
          type="submit"
          sx={{ p: "10px", fontSize: "1.6rem", color: "white", flex: 1 }}
        >
          Add to Cart
        </IconButton>
      </Paper>
    </div>
  );
};

export default AddItemButton;
