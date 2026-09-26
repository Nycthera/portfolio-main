"use client";

import { useRef, useState } from "react";

const TRACK_PATH = "/audio/background-music.mp3";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [message, setMessage] = useState("TRACK READY");

  async function toggleAudio() {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
      setMessage("MUSIC PAUSED");
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
      setMessage("NOW PLAYING");
    } catch {
      setPlaying(false);
      setMessage("ADD YOUR MP3 TO /PUBLIC/AUDIO");
    }
  }

  return (
    <section className="music-section section-shell" id="music">
      <div className="music-copy reveal">
        <p className="eyebrow">[ SOUND TEST ]</p>
        <h2>BACKGROUND<br /><em>MUSIC</em></h2>
        <p>
          Add your own licensed track as <code>public/audio/background-music.mp3</code>.
          The player loops it quietly and never starts without a click.
        </p>
      </div>

      <div className="music-console reveal">
        <div className="speaker" aria-hidden="true">
          <i /><i /><i /><i />
        </div>
        <div className="track-info">
          <span>NOW SELECTED</span>
          <strong>YOUR THEME</strong>
          <small>{message}</small>
        </div>
        <button
          type="button"
          className="audio-toggle"
          aria-pressed={playing}
          aria-label={playing ? "Turn background music off" : "Turn background music on"}
          onClick={toggleAudio}
        >
          <span aria-hidden="true">{playing ? "■" : "▶"}</span>
          {playing ? "OFF" : "ON"}
        </button>
        <audio
          ref={audioRef}
          src={TRACK_PATH}
          loop
          preload="metadata"
          onEnded={() => setPlaying(false)}
          onError={() => setMessage("ADD YOUR MP3 TO /PUBLIC/AUDIO")}
        />
      </div>
    </section>
  );
}
