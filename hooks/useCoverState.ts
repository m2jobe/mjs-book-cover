import { useState } from "react";

import { Cover } from "../types";

const initialCover: Cover = {
  title: "The Art of Storytelling",
  subtitle: "A Journey Through Imagination",
  author: "Alex Rivers",
  blurb:
    "A compelling exploration of narrative craft and creative expression...",
  format: "hardcover",
  style: "bold",
  verticalAlign: "center",
  horizontalAlign: "center",
  isFlipped: false,
};

export const useCoverState = () => {
  const [cover, setCover] = useState<Cover>(initialCover);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const updateField = <K extends keyof Cover>(field: K, value: Cover[K]) => {
    setCover((prev) => ({ ...prev, [field]: value }));
  };

  const handleFlip = () => {
    setIsTransitioning(true);
    setCover((prev) => ({ ...prev, isFlipped: !prev.isFlipped }));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleReset = () => {
    setCover(initialCover);
  };

  return {
    cover,
    isTransitioning,
    updateField,
    handleFlip,
    handleReset,
  };
};
