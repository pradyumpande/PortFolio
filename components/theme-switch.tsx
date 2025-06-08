"use client";

import React, { useEffect, useState } from "react";

interface Track {
  name: string;
  artist: string;
  albumArt: string;
}

export default function RecentSpotifyTrack() {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    const fetchRecentTrack = async () => {
      try {
        const res = await fetch("/api/spotify/recent"); // Create this route
        if (!res.ok) throw new Error("Failed to fetch track");
        const data = await res.json();
        const item = data?.items?.[0]?.track;

        setTrack({
          name: item.name,
          artist: item.artists[0].name,
          albumArt: item.album.images[0].url,
        });
      } catch (error) {
        console.error("Spotify fetch error:", error);
      }
    };

    fetchRecentTrack();
  }, []);

  if (!track) return null;


  return (
    <div
      className="fixed bottom-5 right-5 bg-white dark:bg-gray-900 w-[18rem] p-4 rounded-xl shadow-2xl border border-white/20 flex items-center space-x-4 transition-all"
    >
      <img
        src={track.albumArt}
        alt="Album Art"
        className="w-12 h-12 rounded-md shadow-md"
      />
      <div className="flex flex-col text-sm">
        <span className="font-semibold text-gray-800 dark:text-gray-100">
          {track.name}
        </span>
        <span className="text-gray-500 dark:text-gray-400">
          {track.artist}
        </span>
      </div>
    </div>
  );
}