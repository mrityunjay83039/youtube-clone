import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fethFromAPI";
import { Videos } from "./";
import { Box, Typography } from "@mui/material";

function SearchFeed() {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState(null);


  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box xs={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} videoWidth="32%" direction="row"/>}
      </Box>
    </Box>
  );
}

export default SearchFeed;
