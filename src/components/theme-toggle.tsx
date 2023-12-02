"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="flex items-center justify-between space-x-2 px-2">
      <span>Toggle theme</span>
      <Switch onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
    </div>
  )
}
