import React from "react";
import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "../components";
import { fetchFromAPI } from "../utils/fethFromAPI";

const Feed = () => {

  const[selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  if(selectedCategory==='Mrityunjay Mishra'){
    setSelectedCategory(`How to setup Google Cloud FTP with FileZilla Mrityunjay Mishra`)
  }
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>{
      setVideos(data.items);
    })
    
  },[selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>

    {/* Leftside Box */}
      <Box
        sx={{
          borderRight: "1px solid #3d3d3d",
          height: { sx: "auto", md: "92vh" },
          px: { sx: 0, md: 2 },
        }}>

      {/* Sidebar with categories */}
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      {/* Copyright text down below the Sidebar */}
        <Typography className="copyright" sx={{ color: "#ffffff", mt: "1.5" }}>
          @copyright 2024 QTube <br/> By: Mrityunjay Mishra
        </Typography>
      </Box>

    {/* Right Side Box */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "white" }}
          mb={2}>
          {selectedCategory} <span style={{ color: "#fc1503" }}>Video</span>
        </Typography>

      {/* Videos  */}
        <Videos videos={videos} direction="row" videoWidth="31%" />
      </Box>
    </Stack>
  );
};
export default Feed;
