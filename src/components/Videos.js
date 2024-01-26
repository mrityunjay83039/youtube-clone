import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "../components";

const Videos = ({ videos,videoWidth, direction }) => {

  return (
    <Stack direction={{md:direction}} flexWrap="wrap" gap={2} justifyContent="start">
      {
       videos && videos.map((item, idx) => {
          return(
            <Box key={idx} sx={{width:{sx:'100%',md:videoWidth}}}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
          )
        })
        
      }
      <p>Data Loading ....</p>
    </Stack>
  );
};

export default Videos;
