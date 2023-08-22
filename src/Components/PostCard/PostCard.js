import { useState } from "react";

import { IMAGE_URL, API_KEY } from "../../Constants/Constant";
import YouTube from "react-youtube";
import "./PostCard.css";
import axios from "axios";

function PostCart(props) {
  const [video, setVideo] = useState(false);
  const [videoKey, setVideoKey] = useState("");

  let imagePath;
  if (props.poster) {
    imagePath = props.item.poster_path;
  } else {
    imagePath = props.item.backdrop_path;
  }
  const showVideo = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.itemId}/videos?api_key=${API_KEY}`
      )
      .then((response) => {
        if (response.data.results && response.data.results.length > 0) {
            const extractedVideoKey = response.data.results[0].key;
            setVideoKey(extractedVideoKey);
            setVideo(true);
          }
       
      })
      .catch((err) => {
        console.log('Video not available');
      })
      
  };

  const youtubeOpts = {
    height: "500",
    width: "800",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div
      className={`${
        props.poster ? "posters" : "horizontal-poster"
      } mx-2 flex-none`}
    >
      <img
        src={`${IMAGE_URL + imagePath}`}
        alt="Movies Card"
        onClick={() => showVideo(props.itemId)}
      />

      {video && (
        <div className="video-popup">
          <div className="video-inner">
            <YouTube
              videoId={videoKey}
              opts={youtubeOpts}
              onReady={(event) => event.target.playVideo()}
            />
          </div>
          <div className="close-button" onClick={()=>setVideo(false)}>
            Close
          </div>
        </div>
      )}
    </div>
  );
}

export default PostCart;
