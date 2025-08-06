import { useState } from 'react';
import axios from 'axios';

const LikeButton = ({ videoId, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    try {
      if (liked) {
        await axios.put(`/api/videos/${videoId}/unlike`);
        setLikes(likes - 1);
      } else {
        await axios.put(`/api/videos/${videoId}/like`);
        setLikes(likes + 1);
      }
      setLiked(!liked);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center space-x-1 px-3 py-1 rounded-full ${liked ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
      <span>{likes}</span>
    </button>
  );
};

export default LikeButton;
