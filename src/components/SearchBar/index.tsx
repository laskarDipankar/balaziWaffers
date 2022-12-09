import {
  Divider,
  IconButton,
  InputBase,
  Paper,
  TextField,
} from "@mui/material";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import { Label } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <div>
      <Paper
        component="form"
        sx={{
          borderRadius: "50px",
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          backgroundColor: "black",
        }}
      >
        <SearchIcon
          sx={{ color: "white", p: "10px", m: 1, fontSize: "40px" }}
        />
        <InputBase
          sx={{ ml: 1, flex: 1, color: "white", fontSize: "20px" }}
          placeholder="Search"
          inputProps={{ "aria-label": "search ", color: "white" }}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px", color: "white" }}
          aria-label="search"
        ></IconButton>
        <Divider
          color="white"
          sx={{ height: 56, m: 1 }}
          orientation="vertical"
        />
        <IconButton sx={{ p: "10px", color: "white" }} aria-label="search">
          <ShoppingBagIcon
            fontSize="large"
            sx={{
              fontSize: "40px",
            }}
          />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
