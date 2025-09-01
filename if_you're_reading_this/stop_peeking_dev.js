import React, { useState } from "react";

export default function LikeButton() {
  const [likeThisVideo, setLikeThisVideo] = useState(false);

  // devs will understand this function
  const handleClick = () => {
    setLikeThisVideo(true);
  };

  return (
    <div className="p-4 border rounded text-center">
      <h2 className="text-base md:text-xl">Did you like this video?</h2>
      <button
        onClick={handleClick}
        disabled={likeThisVideo}
        className={`px-4 py-2 rounded ${
          likeThisVideo ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
      >
        {likeThisVideo ? "✅ Liked" : "👍 Like"}
      </button>
    </div>
  );
}
