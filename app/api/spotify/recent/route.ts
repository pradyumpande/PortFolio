// app/api/spotify/recent/route.ts
import { NextResponse } from "next/server";
export async function GET() {
    const accessToken = Response; // Replace with real token storage in production

  if (!accessToken) {
    return NextResponse.json({ error: "Missing access token" }, { status: 401 });
  }

  try {
    const res = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Spotify API error" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
function cookies() {
    throw new Error("Function not implemented.");
}

