"use client";

import { LogOutIcon, MoreVerticalIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import { ThemeModeSwitcher } from "./theme-mode-switcher";
import { useEffect, useState } from "react";
export function NavUser() {
  const { isMobile } = useSidebar();
  const [user, setUser] = useState<{
    nama: string;
    user_id: string;
    tenant_id: string;
    role: string;
  } | null>(null);
  useEffect(() => {
    fetch("/api/me", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setUser(data);
      });
  }, []);
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src="https://github.com/shadcn.png" alt="pic" />
                <AvatarFallback className="rounded-lg">InnSight</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {user ? user.nama : <Skeleton className="rounded-full" />}
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  {user ? user.role : <Skeleton className="rounded-full" />}
                </span>
              </div>
              <MoreVerticalIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg grayscale">
                  <AvatarImage src="https://github.com/shadcn.png" alt="pic" />
                  <AvatarFallback className="rounded-lg">
                    <Skeleton />
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {user ? user.nama : <Skeleton className="rounded-full" />}
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    {user ? user.role : <Skeleton className="rounded-full" />}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex flex-row gap-2">
                <p>Mode:</p>
                <ThemeModeSwitcher />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/logout" className="flex flex-row gap-2">
                <LogOutIcon />
                Keluar
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
