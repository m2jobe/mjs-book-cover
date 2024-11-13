"use client";

import React, { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
  Switch,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import {
  BookOpen,
  Moon,
  Sun,
  RotateCcw,
  Download,
  Share2,
  Palette,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyStart,
  AlignVerticalJustifyEnd,
  Repeat,
} from "lucide-react";
import { useTheme } from "next-themes";

const formatOptions = [
  {
    value: "hardcover",
    label: "Hardcover",
    dimensions: { width: 6.125, height: 9.25 },
  },
  {
    value: "trade",
    label: "Trade Paperback",
    dimensions: { width: 6, height: 9 },
  },
  {
    value: "mass",
    label: "Mass Market",
    dimensions: { width: 4.25, height: 6.87 },
  },
  {
    value: "children",
    label: "Children's",
    dimensions: { width: 8, height: 10 },
  },
  {
    value: "square",
    label: "Square",
    dimensions: { width: 8.5, height: 8.5 },
  },
  {
    value: "executive",
    label: "Executive",
    dimensions: { width: 7, height: 10 },
  },
];

const styleOptions = [
  {
    value: "bold",
    label: "Bold",
    gradient: "bg-yellow-400",
    titleFont: "font-black",
    subtitleFont: "font-bold",
    accent: "border-black",
  },
  {
    value: "punk",
    label: "Punk",
    gradient: "bg-rose-500",
    titleFont: "font-black",
    subtitleFont: "font-bold",
    accent: "border-black",
  },
  {
    value: "cyber",
    label: "Cyber",
    gradient: "bg-cyan-400",
    titleFont: "font-black",
    subtitleFont: "font-bold",
    accent: "border-black",
  },
  {
    value: "retro",
    label: "Retro",
    gradient: "bg-lime-400",
    titleFont: "font-black",
    subtitleFont: "font-bold",
    accent: "border-black",
  },
  {
    value: "stark",
    label: "Stark",
    gradient: "bg-white",
    titleFont: "font-black",
    subtitleFont: "font-bold",
    accent: "border-black",
  },
  {
    value: "noise",
    label: "Noise",
    gradient: "bg-purple-400",
    titleFont: "font-black",
    subtitleFont: "font-bold",
    accent: "border-black",
  },
];

export default function BookCoverCreator() {
  const { theme, setTheme } = useTheme();
  const [format, setFormat] = useState("hardcover");
  const [style, setStyle] = useState("bold");
  const [title, setTitle] = useState("The Art of Storytelling");
  const [subtitle, setSubtitle] = useState("A Journey Through Imagination");
  const [author, setAuthor] = useState("Alex Rivers");
  const [blurb, setBlurb] = useState(
    "A compelling exploration of narrative craft and creative expression..."
  );
  const [verticalAlign, setVerticalAlign] = useState("center");
  const [horizontalAlign, setHorizontalAlign] = useState("center");
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const selectedFormat = formatOptions.find((f) => f.value === format);
  const aspectRatio = selectedFormat
    ? selectedFormat.dimensions.width / selectedFormat.dimensions.height
    : 6.125 / 9.25;
  const selectedStyle =
    styleOptions.find((s) => s.value === style) || styleOptions[0];

  const handleFlip = () => {
    setIsTransitioning(true);
    setIsFlipped(!isFlipped);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleDownload = () => {
    alert("Not quite implemented yet!");
  };

  const getPositionClasses = () => {
    const vClasses = {
      top: "justify-start pt-12",
      center: "justify-center",
      bottom: "justify-end pb-12",
    };

    const hClasses = {
      left: "items-start text-left px-12",
      center: "items-center text-center px-12",
      right: "items-end text-right px-12",
    };

    return `${vClasses[verticalAlign]} ${hClasses[horizontalAlign]}`;
  };

  const handleReset = () => {
    setTitle("The Art of Storytelling");
    setSubtitle("A Journey Through Imagination");
    setAuthor("Alex Rivers");
    setBlurb(
      "A compelling exploration of narrative craft and creative expression..."
    );
    setStyle("bold");
    setFormat("hardcover");
    setVerticalAlign("center");
    setHorizontalAlign("center");
    setIsFlipped(false);
  };

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
      {/* Neo-brutalist navbar */}
      <nav className="w-full z-50 bg-white dark:bg-black border-b-4 border-black dark:border-white">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-yellow-400 border-2 border-black rotate-3 hover:rotate-0 transition-transform">
              <BookOpen className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-black">COVER CREATOR</span>
          </div>
          <Switch
            defaultSelected={theme === "dark"}
            size="lg"
            color="warning"
            startContent={<Sun className="w-5 h-5" />}
            endContent={<Moon className="w-5 h-5" />}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </div>
      </nav>

      <div className="max-w-7xl mx-auto pt-12 px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-8">
          {/* Controls Card */}
          <Card className="h-fit border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            <CardBody className="gap-8 p-8">
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

              <div className="grid grid-cols-2 gap-4">
                {styleOptions.map((option) => (
                  <Button
                    key={option.value}
                    className={`h-24 border-2 border-black hover:translate-y-1 transition-transform ${
                      option.gradient
                    } ${
                      style === option.value
                        ? "ring-4 ring-black dark:ring-white"
                        : ""
                    }`}
                    onClick={() => setStyle(option.value)}
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
                    orientation="horizontal"
                    value={verticalAlign}
                    onValueChange={setVerticalAlign}
                    classNames={{
                      wrapper: "gap-6",
                    }}
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
                    orientation="horizontal"
                    value={horizontalAlign}
                    onValueChange={setHorizontalAlign}
                    classNames={{
                      wrapper: "gap-6",
                    }}
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
                label="Title"
                value={title}
                onValueChange={setTitle}
                classNames={{
                  input: "text-lg",
                  inputWrapper:
                    "border-2 border-black dark:border-white rounded-md",
                  label: "text-lg font-bold",
                }}
              />

              <Input
                label="Subtitle"
                value={subtitle}
                onValueChange={setSubtitle}
                classNames={{
                  inputWrapper:
                    "border-2 border-black dark:border-white rounded-md",
                  label: "text-lg font-bold",
                }}
              />

              <Input
                label="Author"
                value={author}
                onValueChange={setAuthor}
                classNames={{
                  inputWrapper:
                    "border-2 border-black dark:border-white rounded-md",
                  label: "text-lg font-bold",
                }}
              />

              <Textarea
                label="Back Cover Blurb"
                value={blurb}
                onValueChange={setBlurb}
                minRows={4}
                classNames={{
                  inputWrapper:
                    "border-2 border-black dark:border-white rounded-md",
                  label: "text-lg font-bold",
                }}
              />

              <div className="flex justify-between mt-4">
                <Button
                  className="rounded-md bg-rose-500 text-white font-bold border-2 border-black hover:translate-y-1 transition-transform"
                  startContent={<RotateCcw className="w-5 h-5" />}
                  onClick={handleReset}
                >
                  Reset
                </Button>

                <div className="flex gap-3">
                  <Button
                    className="rounded-md  bg-purple-500 text-white font-bold border-2 border-black hover:translate-y-1 transition-transform"
                    startContent={<Repeat className="w-5 h-5" />}
                    onClick={handleFlip}
                  >
                    Flip
                  </Button>
                  <Button
                    onClick={handleDownload}
                    className="rounded-md  bg-lime-400 text-black font-bold border-2 border-black hover:translate-y-1 transition-transform"
                    startContent={<Download className="w-5 h-5" />}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Preview Card */}
          <Card className="bg-white dark:bg-black border-4 border-black dark:border-white p-8 flex items-center justify-center min-h-[700px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <div className="perspective-1000 w-full">
              <div
                className={`
                  relative w-full max-w-[800px] mx-auto
                  transition-all duration-600 ease-in-out
                  ${isTransitioning ? "scale-95" : "scale-100"}
                `}
                style={{
                  aspectRatio: aspectRatio,
                }}
              >
                <div
                  className={`
                    absolute w-full h-full
                    transform-style-preserve-3d transition-transform duration-600
                    ${isFlipped ? "rotate-y-180" : "rotate-y-0"}
                  `}
                >
                  {/* Front Cover */}
                  <div
                    className={`
                      absolute w-full h-full backface-hidden
                      border-8 border-black dark:border-white
                      shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]
                      overflow-hidden
                      ${selectedStyle.gradient}
                      flex flex-col ${getPositionClasses()}
                    `}
                  >
                    <div className="space-y-8 z-10">
                      <h2
                        className={`text-5xl ${selectedStyle.titleFont} text-black leading-tight`}
                      >
                        {title}
                      </h2>
                      {subtitle && (
                        <p
                          className={`text-2xl ${selectedStyle.subtitleFont} text-black/80`}
                        >
                          {subtitle}
                        </p>
                      )}
                      <p className="text-3xl text-black mt-auto font-bold">
                        {author}
                      </p>
                    </div>
                  </div>

                  {/* Back Cover */}
                  <div
                    className={`
                      absolute w-full h-full backface-hidden
                      border-8 border-black dark:border-white
                      shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]
                      overflow-hidden
                      ${selectedStyle.gradient}
                      flex flex-col p-8 rotate-y-180
                    `}
                  >
                    <div className="bg-white/90 dark:bg-black/90 border-4 border-black dark:border-white p-6 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                      <p
                        className={`text-xl ${selectedStyle.subtitleFont} leading-relaxed text-black dark:text-white`}
                      >
                        {blurb}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
