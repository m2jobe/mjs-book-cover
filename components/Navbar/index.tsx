// components/Navbar.tsx
import React from "react";
import { Switch } from "@nextui-org/react";
import { BookOpen, Sun, Moon } from "lucide-react";

interface NavbarProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => (
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
);

export default Navbar;
