import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <AiFillPauseCircle
      size={35}
      className="text-gray-300"
      onClick={handlePause}
    />
  ) : (
    <AiFillPlayCircle
      size={35}
      className="text-gray-300"
      onClick={handlePlay}
    />
  );

export default PlayPause;
