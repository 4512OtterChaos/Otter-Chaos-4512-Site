import React from "react"
import ReactPlayer from "react-player"

const VideoPlayer = (props) => {
  const config = {
    youtube: {
      origin: typeof window !== "undefined" ? window.location.origin : undefined,
      enablejsapi: 0,
    },
  }

  return <ReactPlayer config={config} controls {...props} />
}

export default VideoPlayer