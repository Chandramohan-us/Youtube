const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden bg-black">
      <video
        controls
        className="absolute top-0 left-0 w-full h-full"
        src={videoUrl}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
