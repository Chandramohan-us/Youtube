import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LikeButton from '../components/LikeButton';
import VideoPlayer from '../components/VideoPlayer';

const Watch = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get(`/api/videos/${id}`);
        setVideo(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load video');
        setLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mt-8">{error}</div>;
  }

  if (!video) {
    return <div className="text-center mt-8">Video not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <VideoPlayer videoUrl={video.videoUrl} />
      
      <div className="mt-4">
        <h1 className="text-2xl font-bold">{video.title}</h1>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-600">{video.views} views • {new Date(video.uploadDate).toLocaleDateString()}</span>
          <LikeButton videoId={video._id} initialLikes={video.likes} />
        </div>
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold">{video.channel}</h3>
          <p className="mt-2">{video.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Watch;
