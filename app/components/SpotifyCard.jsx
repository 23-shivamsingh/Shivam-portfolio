"use client";
export default function SpotifyCard() {
  return (
    <section className="mt-2 flex flex-col items-center gap-4">
      <div className="px-8 py-3 rounded-full bg-black/70 border border-white/10 shadow-lg">
        <span className="text-sm font-semibold">
          <span className="text-[#f97373]">Currently</span>{" "}
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Hooked to
          </span>
        </span>
      </div>

      {/* Spotify embed */}
      <div className="w-80 max-w-xl">
        <iframe
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/track/4fp8FVTdpieFTQxBwJHqNg?utm_source=generator"
          width="100%"
          height="100"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
