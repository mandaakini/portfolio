"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ChordType = "maj7" | "min7" | "dominant7" | "sus2";

type NoteNode = {
  label: string;
  midi: number;
  x: number;
  y: number;
};

const NOTES: NoteNode[] = [
  { label: "C", midi: 60, x: 50, y: 10 },
  { label: "G", midi: 67, x: 74, y: 16 },
  { label: "D", midi: 62, x: 89, y: 34 },
  { label: "A", midi: 69, x: 92, y: 59 },
  { label: "E", midi: 64, x: 76, y: 82 },
  { label: "B", midi: 71, x: 53, y: 91 },
  { label: "F♯", midi: 66, x: 29, y: 83 },
  { label: "D♭", midi: 61, x: 11, y: 63 },
  { label: "A♭", midi: 68, x: 10, y: 38 },
  { label: "E♭", midi: 63, x: 26, y: 18 },
  { label: "B♭", midi: 70, x: 17, y: 50 },
  { label: "F", midi: 65, x: 50, y: 48 },
];

const CHORDS: Record<
  ChordType,
  {
    label: string;
    intervals: number[];
    descriptor: string;
  }
> = {
  maj7: {
    label: "maj7",
    intervals: [0, 4, 7, 11],
    descriptor: "warm · luminous",
  },
  min7: {
    label: "min7",
    intervals: [0, 3, 7, 10],
    descriptor: "soft · introspective",
  },
  dominant7: {
    label: "7",
    intervals: [0, 4, 7, 10],
    descriptor: "tense · unresolved",
  },
  sus2: {
    label: "sus2",
    intervals: [0, 2, 7],
    descriptor: "open · weightless",
  },
};

const CHROMATIC_NAMES = [
  "C",
  "D♭",
  "D",
  "E♭",
  "E",
  "F",
  "F♯",
  "G",
  "A♭",
  "A",
  "B♭",
  "B",
];

function pitchClass(midi: number) {
  return ((midi % 12) + 12) % 12;
}

function frequencyFromMidi(midi: number) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

export default function HarmonyExplorer() {
  const [activeNote, setActiveNote] = useState<NoteNode>(NOTES[0]);
  const [chordType, setChordType] = useState<ChordType>("maj7");
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const audioContextRef = useRef<AudioContext | null>(null);
  const playingTimerRef = useRef<number | null>(null);

  const chord = CHORDS[chordType];

  const chordNotes = useMemo(() => {
    return chord.intervals.map((interval) => {
      const midi = activeNote.midi + interval;

      return {
        midi,
        label: CHROMATIC_NAMES[pitchClass(midi)],
        pitchClass: pitchClass(midi),
      };
    });
  }, [activeNote, chord]);

  const activePitchClasses = chordNotes.map((note) => note.pitchClass);

  const activeNodes = NOTES.filter((note) =>
    activePitchClasses.includes(pitchClass(note.midi)),
  );

  useEffect(() => {
    if (hasInteracted) return;

    const interval = window.setInterval(() => {
      setActiveNote((current) => {
        const currentIndex = NOTES.findIndex(
          (note) => note.label === current.label,
        );

        return NOTES[(currentIndex + 1) % NOTES.length];
      });
    }, 5000);

    return () => window.clearInterval(interval);
  }, [hasInteracted]);

  useEffect(() => {
    return () => {
      if (playingTimerRef.current) {
        window.clearTimeout(playingTimerRef.current);
      }

      audioContextRef.current?.close();
    };
  }, []);

  function selectNote(note: NoteNode) {
    setHasInteracted(true);
    setActiveNote(note);
  }

  async function playChord() {
    const AudioContextClass =
      window.AudioContext ||
      (
        window as typeof window & {
          webkitAudioContext?: typeof AudioContext;
        }
      ).webkitAudioContext;

    if (!AudioContextClass) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContextClass();
    }

    const context = audioContextRef.current;

    if (context.state === "suspended") {
      await context.resume();
    }

    const now = context.currentTime;
    const master = context.createGain();

    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.11, now + 0.08);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
    master.connect(context.destination);

    chordNotes.forEach((note, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = index === 0 ? "sine" : "triangle";
      oscillator.frequency.setValueAtTime(
        frequencyFromMidi(note.midi),
        now,
      );

      gain.gain.setValueAtTime(index === 0 ? 0.75 : 0.42, now);

      oscillator.connect(gain);
      gain.connect(master);

      oscillator.start(now + index * 0.025);
      oscillator.stop(now + 1.9);
    });

    setIsPlaying(true);

    if (playingTimerRef.current) {
      window.clearTimeout(playingTimerRef.current);
    }

    playingTimerRef.current = window.setTimeout(() => {
      setIsPlaying(false);
    }, 1800);
  }

  return (
    <section
      className="harmony-explorer"
      aria-label="Interactive harmony explorer"
    >
      <div className="harmony-explorer__topline">
        <span>Harmony Explorer</span>
        <span>Hover to find the pattern</span>
      </div>

      <div className="harmony-constellation">
        <svg
          className="harmony-constellation__lines"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          {activeNodes.map((node, index) => {
            const next = activeNodes[(index + 1) % activeNodes.length];

            return (
              <line
                key={`${node.label}-${next.label}`}
                x1={node.x}
                y1={node.y}
                x2={next.x}
                y2={next.y}
              />
            );
          })}
        </svg>

        {NOTES.map((note, index) => {
          const notePitchClass = pitchClass(note.midi);
          const isRoot =
            notePitchClass === pitchClass(activeNote.midi);
          const isChordTone =
            activePitchClasses.includes(notePitchClass);

          return (
            <button
              key={note.label}
              type="button"
              className={[
                "harmony-note",
                isRoot ? "harmony-note--root" : "",
                !isRoot && isChordTone
                  ? "harmony-note--active"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{
                left: `${note.x}%`,
                top: `${note.y}%`,
                animationDelay: `${index * 110}ms`,
              }}
              onMouseEnter={() => selectNote(note)}
              onFocus={() => selectNote(note)}
              onClick={() => {
                selectNote(note);
                void playChord();
              }}
              aria-label={`Play ${note.label}${chord.label}`}
            >
              {note.label}
            </button>
          );
        })}

        <button
          type="button"
          className={[
            "harmony-center",
            isPlaying ? "harmony-center--playing" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={() => void playChord()}
          aria-label={`Play ${activeNote.label}${chord.label}`}
        >
          <span className="harmony-center__chord">
            {activeNote.label}
            {chord.label}
          </span>

          <span className="harmony-center__notes">
            {chordNotes.map((note) => note.label).join(" · ")}
          </span>

          <span className="harmony-center__descriptor">
            {chord.descriptor}
          </span>

          <span className="harmony-center__play">
            {isPlaying ? "playing" : "click to hear"}
          </span>
        </button>
      </div>

      <div
        className="harmony-controls"
        aria-label="Choose chord quality"
      >
        {(Object.keys(CHORDS) as ChordType[]).map((type) => (
          <button
            key={type}
            type="button"
            className={
              chordType === type
                ? "harmony-control harmony-control--active"
                : "harmony-control"
            }
            onClick={() => {
              setHasInteracted(true);
              setChordType(type);
            }}
          >
            {CHORDS[type].label}
          </button>
        ))}
      </div>
    </section>
  );
}