import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      top: 0,
      backgroundColor: "#000",
      justifyContent: "space-between",
    }}>
      <Link to="/" style={{display:'flex', alignItems:'center'}}>
        <img src={logo} alt="logo" height={45}/>  
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: "white" }}
         >
         &nbsp;  Q<span style={{ color: "#fc1503" }}> Tube</span>
        </Typography>
      </Link>
      <SearchBar/>
    </Stack>
);

export default Navbar;
