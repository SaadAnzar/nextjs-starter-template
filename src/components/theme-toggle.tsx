"use client";

import { MoonStar, Smartphone, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <TooltipProvider delayDuration={150}>
      <div className="flex h-[33.25px] flex-row rounded-full border">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => setTheme("system")}
              className={cn(
                theme === "system" ? "border opacity-100" : "opacity-60",
                "flex size-8 items-center justify-center rounded-full hover:opacity-100"
              )}
            >
              <Smartphone className="size-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Switch to system mode</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => setTheme("light")}
              className={cn(
                theme === "light" ? "border opacity-100" : "opacity-60",
                "flex size-8 items-center justify-center rounded-full hover:opacity-100"
              )}
            >
              <Sun className="size-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Switch to light mode</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => setTheme("dark")}
              className={cn(
                theme === "dark" ? "border opacity-100" : "opacity-60",
                "flex size-8 items-center justify-center rounded-full hover:opacity-100"
              )}
            >
              <MoonStar className="size-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Switch to dark mode</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
