// components/FormatSelector.tsx
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { Palette } from "lucide-react";
import { formatOptions } from "@/utils/options";

interface FormatSelectorProps {
  format: string;
  setFormat: React.Dispatch<React.SetStateAction<string>>;
}

const FormatSelector: React.FC<FormatSelectorProps> = ({
  format,
  setFormat,
}) => (
  <Select
    label="Book Format"
    selectedKeys={[format]}
    onChange={(e) => setFormat(e.target.value)}
    classNames={{
      trigger: "border-2 border-black dark:border-white rounded-md",
      label: "text-md font-bold",
    }}
    startContent={<Palette className="w-5 h-5" />}
  >
    {/* Format Options should be passed as a prop from the parent */}
    {formatOptions.map((option) => (
      <SelectItem key={option.value} textValue={option.label}>
        <div className="flex flex-col">
          <span className="font-bold">{option.label}</span>
          <span className="text-sm opacity-70">
            {option.dimensions.width}" × {option.dimensions.height}"
          </span>
        </div>
      </SelectItem>
    ))}
  </Select>
);

export default FormatSelector;
