import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      transitionDuration: {
        600: "600ms",
      },
      rotate: {
        "y-180": "rotateY(180deg)",
        "y-0": "rotateY(0deg)",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
      perspective: {
        none: "none",
        500: "500px",
        750: "750px",
        1000: "1000px",
        1500: "1500px",
        2000: "2000px",
      },
      transformOrigin: {
        "center-center": "center center",
      },
      animation: {
        flip: "flip 600ms ease-in-out",
        "flip-reverse": "flip-reverse 600ms ease-in-out",
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
        "flip-reverse": {
          "0%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    function ({ addUtilities, matchUtilities, theme }) {
      // Add custom utilities
      addUtilities({
        ".perspective-none": {
          perspective: "none",
        },
        ".perspective-500": {
          perspective: "500px",
        },
        ".perspective-750": {
          perspective: "750px",
        },
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".perspective-1500": {
          perspective: "1500px",
        },
        ".perspective-2000": {
          perspective: "2000px",
        },
        ".backface-visible": {
          "backface-visibility": "visible",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".transform-style-flat": {
          "transform-style": "flat",
        },
        ".transform-style-preserve-3d": {
          "transform-style": "preserve-3d",
        },
        ".rotate-y-0": {
          transform: "rotateY(0deg)",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".transform-origin-center": {
          "transform-origin": "center center",
        },
      });

      // Add dynamic rotation utilities
      matchUtilities(
        {
          "rotate-y": (value) => ({
            transform: `rotateY(${value})`,
          }),
        },
        {
          values: {
            0: "0deg",
            45: "45deg",
            90: "90deg",
            135: "135deg",
            180: "180deg",
            "-45": "-45deg",
            "-90": "-90deg",
            "-135": "-135deg",
            "-180": "-180deg",
          },
        }
      );

      // Add dynamic perspective utilities
      matchUtilities(
        {
          perspective: (value) => ({
            perspective: value,
          }),
        },
        { values: theme("perspective") }
      );
    },
  ],
  safelist: [
    // Add specific classes that need to be safeguarded from purge
    "perspective-1000",
    "backface-hidden",
    "transform-style-preserve-3d",
    "rotate-y-0",
    "rotate-y-180",
    "transform-origin-center",
    "duration-600",
    {
      pattern: /rotate-y-(0|45|90|135|180|-45|-90|-135|-180)/,
    },
    {
      pattern: /perspective-(none|500|750|1000|1500|2000)/,
    },
  ],
};
