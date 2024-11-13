// components/AlignmentControl.tsx
import React from "react";
import { Radio, RadioGroup } from "@nextui-org/react";
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignVerticalJustifyStart,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
} from "lucide-react";

interface AlignmentControlProps {
  verticalAlign: string;
  horizontalAlign: string;
  setVerticalAlign: React.Dispatch<React.SetStateAction<string>>;
  setHorizontalAlign: React.Dispatch<React.SetStateAction<string>>;
}

const AlignmentControl: React.FC<AlignmentControlProps> = ({
  verticalAlign,
  horizontalAlign,
  setVerticalAlign,
  setHorizontalAlign,
}) => (
  <div className="space-y-6 rounded-md bg-zinc-100 dark:bg-zinc-800 p-6 border-2 border-black dark:border-white">
    <h3 className="text-xl font-black">Text Position</h3>

    {/* Vertical Alignment */}
    <div className="space-y-4">
      <p className="font-bold">Vertical Alignment</p>
      <RadioGroup
        orientation="horizontal"
        value={verticalAlign}
        onValueChange={setVerticalAlign}
        classNames={{ wrapper: "gap-6" }}
      >
        <Radio value="top">
          <AlignVerticalJustifyStart className="w-5 h-5" />
        </Radio>
        <Radio value="center">
          <AlignVerticalJustifyCenter className="w-5 h-5" />
        </Radio>
        <Radio value="bottom">
          <AlignVerticalJustifyEnd className="w-5 h-5" />
        </Radio>
      </RadioGroup>
    </div>

    {/* Horizontal Alignment */}
    <div className="space-y-4">
      <p className="font-bold">Horizontal Alignment</p>
      <RadioGroup
        orientation="horizontal"
        value={horizontalAlign}
        onValueChange={setHorizontalAlign}
        classNames={{ wrapper: "gap-6" }}
      >
        <Radio value="left">
          <AlignLeft className="w-5 h-5" />
        </Radio>
        <Radio value="center">
          <AlignCenter className="w-5 h-5" />
        </Radio>
        <Radio value="right">
          <AlignRight className="w-5 h-5" />
        </Radio>
      </RadioGroup>
    </div>
  </div>
);

export default AlignmentControl;
