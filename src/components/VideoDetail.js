import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fethFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <p>Loading ...</p>;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box sx={{ width: { xs: "100%", md: "80%" } }}>
          <Box sx={{ position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography flexDirection="row" alignItems="center" gap={2} display="flex" variant="body1" sx={{ opacity: 0.7 }}>
                  <span><VisibilityOutlinedIcon/> </span>
                  <span> {parseInt(viewCount).toLocaleString()} </span>
                </Typography>
                <Typography flexDirection="row" alignItems="center" gap={2} display="flex" variant="body1" sx={{ opacity: 0.7 }}>
                  <span><ThumbUpOutlinedIcon/></span>
                  <span> {parseInt(likeCount).toLocaleString()} </span>
                  
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{ width: { xs: "100%", md: "20%" } }}
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" videoWidth="100%" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
