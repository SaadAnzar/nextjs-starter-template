"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Github,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Target,
  User,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="mx-auto flex h-16 w-full items-center justify-between space-x-4 px-4 sm:px-12">
        <div className="flex gap-6">
          {pathname === "/" ? (
            <div className="flex items-center space-x-2">
              <Target className="h-6 w-6" />
              <span className="inline-block font-bold">Anzar</span>
            </div>
          ) : (
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-80"
            >
              <Target className="h-6 w-6" />
              <span className="inline-block font-bold">Anzar</span>
            </Link>
          )}
          <nav className="flex gap-6">
            <Link
              href="/home"
              className={cn(
                "text-muted-foreground hover:text-foreground flex items-center text-sm font-medium",
                pathname === "/home" &&
                  "hover:text-muted-foreground cursor-not-allowed opacity-60"
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-muted-foreground hover:text-foreground flex items-center text-sm font-medium",
                pathname === "/about" &&
                  "hover:text-muted-foreground cursor-not-allowed opacity-60"
              )}
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-2 w-56">
                <DropdownMenuLabel className="truncate">
                  anzarhps@gmail.com
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuLabel>
                  <ThemeToggle />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="https://github.com/SaadAnzar" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      <span>GitHub</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="mailto:anzarhps@gmail.com" target="_blank">
                      <LifeBuoy className="mr-2 h-4 w-4" />
                      <span>Support</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link href="/" className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
