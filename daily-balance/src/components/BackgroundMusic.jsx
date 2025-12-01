import { useEffect, useRef } from 'react';

export default function BackgroundMusic({ src }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () => {
      audio.play().catch(() => {});
    };

    // lecture après la première interaction utilisateur
    document.addEventListener('click', tryPlay, { once: true });

    return () => {
      document.removeEventListener('click', tryPlay);
    };
  }, []);

  // si la source change → on recharge et on relance
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
    audio.play().catch(() => {});
  }, [src]);

  return (
    <audio
      ref={audioRef}
      src={src}
      loop
      style={{ display: 'none' }}
    />
  );
}
