import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(snippet);
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : `/video/${demoVideoUrl}`}>

        {/* Video thumbnail */}
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
          alt={snippet.title}
        />
        <CardContent sx={{height:'106px', backgroundColor:'#1e1e1e'}}>

            {/* Video Title  */}
            <Link to={videoId ? `/video/${videoId}` : `/video/${demoVideoUrl}`}>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {snippet?.title?.slice(0, 60) || demoVideoTitle?.slice(0, 60)}
                </Typography>
            </Link>

            {/* Channel Name  */}
            <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : `/channel/${demoChannelUrl}`}>
                <Typography  variant="subtitle2" color="gray">
                    {snippet?.channelTitle?.slice(0, 60) || demoChannelTitle?.slice(0, 60)}
                </Typography>
                <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }}/>
            </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
