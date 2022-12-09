import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const FlavourIcon = styled(IconButton)({
  borderRadius: "50%",
  m: "4px",
  p: "4",
  width: "80px",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid black",
  transition: "all 0.3s ease-in-out",
  scale: "1",

  "&:hover": {
    //   backgroundColor: "red",
    transform: "scale(1.1)",
  },
});
