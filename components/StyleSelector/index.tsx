// components/StyleSelector.tsx
import React from "react";
import { Button } from "@nextui-org/react";
import { styleOptions } from "@/utils/options";

interface StyleSelectorProps {
  style: string;
  setStyle: React.Dispatch<React.SetStateAction<string>>;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ style, setStyle }) => (
  <div className="grid grid-cols-2 gap-4">
    {styleOptions.map((option) => (
      <Button
        key={option.value}
        className={`h-24 border-2 border-black hover:translate-y-1 transition-transform ${
          option.gradient
        } ${style === option.value ? "ring-4 ring-black dark:ring-white" : ""}`}
        onClick={() => setStyle(option.value)}
      >
        <span className="text-black font-black text-lg">{option.label}</span>
      </Button>
    ))}
  </div>
);

export default StyleSelector;
