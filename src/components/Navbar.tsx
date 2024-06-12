"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Github,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Palette,
  Pizza,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="flex h-16 w-full items-center justify-between space-x-4 px-4 sm:px-12">
        <nav className="flex flex-row items-center space-x-4 sm:space-x-6">
          <Link
            href="/"
            className="inline-flex items-center pr-4 text-xl font-bold sm:pr-8"
          >
            <Pizza className="mr-2 size-5" />
            Anzar
          </Link>

          <Link
            href="/home"
            className={cn(
              "font-medium hover:opacity-50",
              pathname === "/home" && "pointer-events-none opacity-60"
            )}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={cn(
              "font-medium hover:opacity-50",
              pathname === "/about" && "pointer-events-none opacity-60"
            )}
          >
            About
          </Link>
        </nav>
        <nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <User className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-2 w-56">
              <DropdownMenuLabel className="truncate">
                anzarhps@gmail.com
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuLabel className="inline-flex items-center">
                <Palette className="mr-2 size-4" />
                <span className="mr-4">Theme</span>
                <ThemeToggle />
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">
                    <LayoutDashboard className="mr-2 size-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="https://github.com/SaadAnzar" target="_blank">
                    <Github className="mr-2 size-4" />
                    <span>GitHub</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="mailto:anzarhps@gmail.com" target="_blank">
                    <LifeBuoy className="mr-2 size-4" />
                    <span>Support</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />

              <DropdownMenuItem asChild>
                <Link href="/" className="cursor-pointer">
                  <LogOut className="mr-2 size-4" />
                  <span>Log out</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
