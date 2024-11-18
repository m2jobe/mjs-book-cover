"use client";

import { useTheme } from "next-themes";

import Navbar from "@/components/Navbar";
import Controls from "@/components/Controls";
import BookCover from "@/components/BookCover";
import { useCoverState } from "@/hooks/useCoverState";

export default function BookCoverCreator() {
  const { theme, setTheme } = useTheme();
  const coverState = useCoverState();

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
      <Navbar theme={theme} onSetTheme={setTheme} />
      <div className="max-w-7xl mx-auto pt-12 px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-8">
          <Controls
            cover={coverState.cover}
            onFlip={coverState.handleFlip}
            onReset={coverState.handleReset}
            onUpdateField={coverState.updateField}
          />
          <BookCover
            {...coverState.cover}
            isTransitioning={coverState.isTransitioning}
          />
        </div>
      </div>
    </div>
  );
}
