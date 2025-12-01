import { useEffect, useRef } from "react";
import musicFile from "../assets/bg-music.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const playMusic = () => {
      audio.play().catch(() => {});
    };

    document.addEventListener("click", playMusic, { once: true });

    return () => {
      document.removeEventListener("click", playMusic);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={musicFile}
      loop
      volume={0.5}
      style={{ display: "none" }}
    />
  );
}
