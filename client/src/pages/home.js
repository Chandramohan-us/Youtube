import { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';
import axios from 'axios';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get('/api/videos');
        setVideos(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map(video => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
};

export default Home;
