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
            sx={{
              fontSize: "2.8rem",
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
            width: 60,
            height: 60,

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
          <RemoveIcon
            sx={{
              fontSize: "2.8rem",
            }}
          />
        </IconButton>
      </Container>
    </div>
  );
};

export default QuantityButton;
