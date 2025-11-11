import React from "react"
import ReactPlayer from "react-player"

const defaultConfig = {
  youtube: {
    origin: window.location.origin,
    enablejsapi: 0,
  },
}

const VideoPlayer = (props) => (
  <ReactPlayer config={defaultConfig} controls {...props} />
)

export default VideoPlayer