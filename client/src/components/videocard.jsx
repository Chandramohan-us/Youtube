import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/watch/${video._id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
          <img
            src={`https://img.youtube.com/vi/${video.videoUrl.split('/').pop()}/0.jpg`} // Placeholder for thumbnail
            alt={video.title}
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 line-clamp-2">{video.title}</h3>
          <p className="text-gray-600 text-sm">{video.channel}</p>
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>{video.views} views</span>
            <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
