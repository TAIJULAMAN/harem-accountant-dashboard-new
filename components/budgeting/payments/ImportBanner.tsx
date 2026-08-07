"use client";

import React, { useState, useRef, useSyncExternalStore } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  MoreVertical,
} from "lucide-react";
import Image from "next/image";
import BaseReactPlayer from "react-player";

interface ReactPlayerRef {
  seekTo: (amount: number, type?: "seconds" | "fraction") => void;
}

interface ReactPlayerProps {
  url: string;
  width?: string;
  height?: string;
  playing?: boolean;
  muted?: boolean;
  onProgress?: (state: {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  }) => void;
  onEnded?: () => void;
  style?: React.CSSProperties;
  config?: Record<string, unknown>;
  ref?: React.Ref<ReactPlayerRef>;
}

const Player = BaseReactPlayer as unknown as React.ComponentType<ReactPlayerProps>;

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ImportBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<ReactPlayerRef>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const isMounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!hasStarted) setHasStarted(true);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen();
      }
    }
  };

  const handleProgress = (state: {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  }) => {
    setProgress(state.played * 100);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (playerRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickPos = (e.clientX - rect.left) / rect.width;
      playerRef.current.seekTo(clickPos);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[240px] md:h-[320px] rounded-2xl overflow-hidden shadow-sm mb-8 group bg-black"
    >
      {/* React Player Instance */}
      {isMounted && (
        <Player
          ref={playerRef}
          url="https://youtu.be/J4KIe4Cf1eQ?si=3ywbEdtinm7Qv9mW"
          width="100%"
          height="100%"
          playing={isPlaying}
          muted={isMuted}
          onProgress={handleProgress}
          onEnded={() => setIsPlaying(false)}
          style={{ pointerEvents: hasStarted ? "auto" : "none" }}
          config={{
            youtube: {
              playerVars: {
                controls: 0,
                disablekb: 1,
                modestbranding: 1,
                rel: 0,
              },
            },
          }}
        />
      )}

      {!hasStarted && (
        <div
          className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center group"
          onClick={togglePlay}
        >
          <Image
            src="/thumbnail.png"
            alt="Import Payments Tutorial"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
          <div className="relative z-20 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </div>
        </div>
      )}

      {/* Video Controls Overlay */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between text-white transition-opacity duration-300 z-20 ${isPlaying && hasStarted ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
      >
        <button
          onClick={togglePlay}
          className="p-2 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
        >
          {isPlaying ? (
            <Pause size={18} fill="currentColor" />
          ) : (
            <Play size={18} fill="currentColor" />
          )}
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="p-2 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
          >
            <Maximize size={18} />
          </button>
          <button className="p-2 hover:bg-white/20 rounded-full transition-colors cursor-pointer">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/30 cursor-pointer hover:h-2 transition-all z-20"
        onClick={handleProgressClick}
      >
        <div
          className="h-full bg-[#5c60f5] transition-all duration-100 ease-linear relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
    </div>
  );
}
