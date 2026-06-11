"use client";

import React from "react";

type YoutubeEmbedProps = {
  videoId: string;
  title?: string;
  className?: string;
};

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({
  videoId,
  title,
  className,
}) => {
  if (!videoId) return null;

  const embedUrl = `https://www.youtube.com/embed/${encodeURIComponent(
    videoId
  )}`;

  return (
    <div
      className={`relative overflow-hidden w-full ${className ?? ""}`}
      style={{ paddingTop: "56.25%" }}
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-xl"
        src={embedUrl}
        title={title ?? "YouTube video player"}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeEmbed;
