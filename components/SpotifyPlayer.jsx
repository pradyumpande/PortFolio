import { useEffect, useState } from 'react';

export default function SpotifyPlayer() {
  const [song, setSong] = useState(null);

  useEffect(() => {
    fetch('/api/now-playing')
      .then(res => res.json())
      .then(data => setSong(data));
  }, []);

  if (!song || !song.isPlaying) return null;

  return (
    <div className="spotify-player">
      <a href={song.songUrl} target="_blank" rel="noopener noreferrer">
        <img src={song.albumImageUrl} alt={song.title} width={60} />
        <div>
          <p><strong>{song.title}</strong></p>
          <p>{song.artist}</p>
        </div>
      </a>
      <style jsx>{`
        .spotify-player {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #1db954;
          color: white;
          padding: 10px;
          border-radius: 8px;
        }
        img {
          border-radius: 4px;
        }
        p {
          margin: 0;
        }
      `}</style>
    </div>
  );
}
