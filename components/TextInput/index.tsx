// components/TextInput.tsx
import { Input, Textarea } from "@nextui-org/react";

type TextInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "input" | "textarea";
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  type = "input",
}) => {
  return type === "input" ? (
    <Input
      label={label}
      value={value}
      onValueChange={onChange}
      classNames={{
        input: "text-lg",
        inputWrapper: "border-2 border-black dark:border-white rounded-md",
        label: "text-lg font-bold",
      }}
    />
  ) : (
    <Textarea
      label={label}
      value={value}
      onValueChange={onChange}
      minRows={4}
      classNames={{
        inputWrapper: "border-2 border-black dark:border-white rounded-md",
        label: "text-lg font-bold",
      }}
    />
  );
};
