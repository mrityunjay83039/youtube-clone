import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fethFromAPI";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });

    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
