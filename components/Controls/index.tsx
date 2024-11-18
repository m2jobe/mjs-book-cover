"use client";
import React from "react";
import {
  Card,
  CardBody,
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import {
  RotateCcw,
  Download,
  Palette,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyStart,
  AlignVerticalJustifyEnd,
  Repeat,
} from "lucide-react";

import { formatOptions, styleOptions } from "@/utils/options";
import { Cover } from "@/types";

// Controls.tsx
interface ControlsProps {
  cover: Cover;
  onUpdateField: <K extends keyof Cover>(field: K, value: Cover[K]) => void;
  onFlip: () => void;
  onReset: () => void;
}

export default function Controls({
  cover,
  onUpdateField,
  onFlip,
  onReset,
}: ControlsProps) {
  const handleDownload = () => {
    alert("Not quite implemented yet!");
  };

  return (
    <Card className="h-fit border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
      <CardBody className="gap-8 p-8">
        <Select
          classNames={{
            trigger: "border-2 border-black dark:border-white rounded-md",
            label: "text-md font-bold",
          }}
          label="Book Format"
          selectedKeys={[cover.format]}
          startContent={<Palette className="w-5 h-5" />}
          onChange={(e) => onUpdateField("format", e.target.value)}
        >
          {formatOptions.map((option) => (
            <SelectItem key={option.value} textValue={option.label}>
              <div className="flex flex-col">
                <span className="font-bold">{option.label}</span>
                <span className="text-sm opacity-70">
                  {option.dimensions.width}&quot; × {option.dimensions.height}
                  &quot;
                </span>
              </div>
            </SelectItem>
          ))}
        </Select>

        <div className="grid grid-cols-2 gap-4">
          {styleOptions.map((option) => (
            <Button
              key={option.value}
              className={`h-24 border-2 border-black hover:translate-y-1 transition-transform ${
                option.gradient
              } ${
                cover.style === option.value
                  ? "ring-4 ring-black dark:ring-white"
                  : ""
              }`}
              onClick={() => onUpdateField("style", option.value)}
            >
              <span className="text-black font-black text-lg">
                {option.label}
              </span>
            </Button>
          ))}
        </div>

        <div className="space-y-6 rounded-md bg-zinc-100 dark:bg-zinc-800 p-6 border-2 border-black dark:border-white">
          <h3 className="text-xl font-black">Text Position</h3>
          <div className="space-y-4">
            <p className="font-bold">Vertical Alignment</p>
            <RadioGroup
              classNames={{ wrapper: "gap-6" }}
              orientation="horizontal"
              value={cover.verticalAlign}
              onValueChange={(value) => onUpdateField("verticalAlign", value)}
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

          <div className="space-y-4">
            <p className="font-bold">Horizontal Alignment</p>
            <RadioGroup
              classNames={{ wrapper: "gap-6" }}
              orientation="horizontal"
              value={cover.horizontalAlign}
              onValueChange={(value) => onUpdateField("horizontalAlign", value)}
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

        <Input
          classNames={{
            input: "text-lg",
            inputWrapper: "border-2 border-black dark:border-white rounded-md",
            label: "text-lg font-bold",
          }}
          label="Title"
          value={cover.title}
          onValueChange={(value) => onUpdateField("title", value)}
        />

        <Input
          classNames={{
            inputWrapper: "border-2 border-black dark:border-white rounded-md",
            label: "text-lg font-bold",
          }}
          label="Subtitle"
          value={cover.subtitle}
          onValueChange={(value) => onUpdateField("subtitle", value)}
        />

        <Input
          classNames={{
            inputWrapper: "border-2 border-black dark:border-white rounded-md",
            label: "text-lg font-bold",
          }}
          label="Author"
          value={cover.author}
          onValueChange={(value) => onUpdateField("author", value)}
        />

        <Textarea
          classNames={{
            inputWrapper: "border-2 border-black dark:border-white rounded-md",
            label: "text-lg font-bold",
          }}
          label="Back Cover Blurb"
          minRows={4}
          value={cover.blurb}
          onValueChange={(value) => onUpdateField("blurb", value)}
        />

        <div className="flex justify-between mt-4">
          <Button
            className="rounded-md bg-rose-500 text-white font-bold border-2 border-black hover:translate-y-1 transition-transform"
            startContent={<RotateCcw className="w-5 h-5" />}
            onClick={onReset}
          >
            Reset
          </Button>

          <div className="flex gap-3">
            <Button
              className="rounded-md bg-purple-500 text-white font-bold border-2 border-black hover:translate-y-1 transition-transform"
              startContent={<Repeat className="w-5 h-5" />}
              onClick={onFlip}
            >
              Flip
            </Button>
            <Button
              className="rounded-md bg-lime-400 text-black font-bold border-2 border-black hover:translate-y-1 transition-transform"
              startContent={<Download className="w-5 h-5" />}
              onClick={handleDownload}
            >
              Save
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
