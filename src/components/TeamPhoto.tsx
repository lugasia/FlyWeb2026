"use client";

import { useState } from "react";

interface TeamPhotoProps {
  name: string;
  photo: string;
}

export function TeamPhoto({ name, photo }: TeamPhotoProps) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  if (failed) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-bg-elevated">
        <span className="text-5xl font-bold text-brand font-[family-name:var(--font-space-grotesk)]">
          {initials}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photo}
      alt={name}
      className="w-full h-full object-cover object-top"
      onError={() => setFailed(true)}
    />
  );
}
