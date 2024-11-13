// components/ControlCard.tsx
import React from "react";
import {
  Card,
  CardBody,
  Input,
  Button,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Download, Palette, Repeat, RotateCcw } from "lucide-react";
import AlignmentControl from "../AlignmentControl";
import StyleSelector from "../StyleSelector";
import FormatSelector from "../FormatSelector";

interface ControlCardProps {
  format: string;
  style: string;
  title: string;
  subtitle: string;
  author: string;
  blurb: string;
  verticalAlign: string;
  horizontalAlign: string;
  setFormat: React.Dispatch<React.SetStateAction<string>>;
  setStyle: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setSubtitle: React.Dispatch<React.SetStateAction<string>>;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
  setBlurb: React.Dispatch<React.SetStateAction<string>>;
  setVerticalAlign: React.Dispatch<React.SetStateAction<string>>;
  setHorizontalAlign: React.Dispatch<React.SetStateAction<string>>;
  handleReset: () => void;
  handleFlip: () => void;
  handleDownload: () => void;
}

const ControlCard: React.FC<ControlCardProps> = ({
  format,
  style,
  title,
  subtitle,
  author,
  blurb,
  verticalAlign,
  horizontalAlign,
  setFormat,
  setStyle,
  setTitle,
  setSubtitle,
  setAuthor,
  setBlurb,
  setVerticalAlign,
  setHorizontalAlign,
  handleReset,
  handleFlip,
  handleDownload,
}) => (
  <Card className="h-fit border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
    <CardBody className="gap-8 p-8">
      <FormatSelector format={format} setFormat={setFormat} />
      <StyleSelector style={style} setStyle={setStyle} />
      <AlignmentControl
        verticalAlign={verticalAlign}
        horizontalAlign={horizontalAlign}
        setVerticalAlign={setVerticalAlign}
        setHorizontalAlign={setHorizontalAlign}
      />
      <Input
        label="Title"
        value={title}
        onValueChange={setTitle}
        classNames={{
          input: "text-lg",
          inputWrapper: "border-2 border-black dark:border-white rounded-md",
          label: "text-lg font-bold",
        }}
      />
      <Input
        label="Subtitle"
        value={subtitle}
        onValueChange={setSubtitle}
        classNames={{
          inputWrapper: "border-2 border-black dark:border-white rounded-md",
          label: "text-lg font-bold",
        }}
      />
      <Input
        label="Author"
        value={author}
        onValueChange={setAuthor}
        classNames={{
          inputWrapper: "border-2 border-black dark:border-white rounded-md",
          label: "text-lg font-bold",
        }}
      />
      <Textarea
        label="Back Cover Blurb"
        value={blurb}
        onValueChange={setBlurb}
        minRows={4}
        classNames={{
          inputWrapper: "border-2 border-black dark:border-white rounded-md",
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
);

export default ControlCard;
