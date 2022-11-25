import React from 'react'
import { Player } from 'video-react';
import video from '../../assets/images/video.mp4'

function Learn() {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src={video}
    />
  )
}

export default Learn
