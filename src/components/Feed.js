import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "../components";

const Feed = () => (
  <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    <Box
      sx={{
        borderRight: "1px solid #3d3d3d",
        height: { sx: "auto", md: "92vh" },
        px: { sx: 0, md: 2 },
      }}>
      <Sidebar />
      <Typography className="copyright" sx={{ color: "#ffffff", mt: "1.5" }}>
        @copyright 2024 Youtube Clone
      </Typography>
    </Box>
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ color: "white" }} mb={2}>
        New <span style={{color:'#fc1503'}}>Video</span>
      </Typography>
      <Videos />
    </Box>
  </Stack>
);

export default Feed;
