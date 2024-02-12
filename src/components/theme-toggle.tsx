"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-between space-x-2 px-2">
      <Label htmlFor="theme-mode">Toggle theme</Label>
      <Switch
        id="theme-mode"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  );
}
