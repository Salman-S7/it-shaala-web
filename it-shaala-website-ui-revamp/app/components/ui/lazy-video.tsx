"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  poster?: string;
}

export default function LazyVideo({ src, className = "", poster }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            if (videoRef.current) {
              // Start loading the video
              videoRef.current.load();
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        rootMargin: "50px", // Start loading when video is 50px from viewport
      }
    );

    const videoElement = videoRef.current;

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className={className}
      poster={poster}
      preload="none" // Don't preload until we're ready
    >
      {isIntersecting && <source src={src} type="video/mp4" />}
    </video>
  );
}
