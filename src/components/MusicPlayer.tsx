import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/song.mp3" type="audio/mpeg" />
      </audio>

      <div
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          zIndex: 9999,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backdropFilter: "blur(12px)",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "22px",
            boxShadow: isPlaying
              ? "0 0 20px rgba(0,255,150,0.6)"
              : "0 0 10px rgba(255,255,255,0.2)",
            transition: "all 0.3s ease",
          }}
        >
          {isPlaying ? "🔊" : "🔇"}
        </div>

        {/* Pulse Animation */}
        {isPlaying && (
          <span
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "2px solid rgba(0,255,150,0.5)",
              animation: "pulse 1.5s infinite",
            }}
          ></span>
        )}
      </div>

      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            70% {
              transform: scale(1.6);
              opacity: 0;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
}
