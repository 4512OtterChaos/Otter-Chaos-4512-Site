import React, { useEffect, useRef } from "react"
import ReactPlayer from "react-player"

const VideoPlayer = (props) => {
  const config = {
    youtube: {
      origin: typeof window !== "undefined" ? window.location.origin : undefined,
      enablejsapi: 0,
    },
  }

  const playerRef = useRef(null)

  useEffect(() => {
    const player = playerRef.current ? playerRef.current.getInternalPlayer() : null;
    if (player) {
      if (player.tagName === 'IFRAME') {
        player.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      } else {
        const iframe = player.querySelector('iframe');
        if (iframe) {
          iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
        }
      }
    }
  }, [props.src]);

  return <ReactPlayer ref={playerRef} config={config} controls {...props} />
}

export default VideoPlayer