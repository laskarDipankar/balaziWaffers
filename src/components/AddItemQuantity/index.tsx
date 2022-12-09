import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Container, IconButton } from "@mui/material";
import { useState } from "react";

const QuantityButton = () => {
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <div>
      <Container
        disableGutters={true}
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <IconButton
          sx={{
            borderRadius: "50%",
            backgroundColor: "white",
            m: "4px",
            p: "4",
          }}
          onClick={() => {
            setQuantity((item) => item + 1);
          }}
        >
          <AddIcon
            fontSize="large"
            sx={{
              borderRadius: "50%",
            }}
          />
        </IconButton>
        <IconButton
          sx={{
            borderRadius: "50%",
            backgroundColor: "white",
            border: "1px solid orange",
            m: "4px",
            width: "50px",

            p: "4",
          }}
        >
          {quantity}
        </IconButton>
        <IconButton
          sx={{
            borderRadius: "50%",
            backgroundColor: "white",
            m: "4px",
            p: "4",
          }}
          onClick={() => {
            quantity === 0
              ? console.log("stop")
              : setQuantity((item) => item - 1);
          }}
        >
          <RemoveIcon fontSize="large" />
        </IconButton>
      </Container>
    </div>
  );
};

export default QuantityButton;
