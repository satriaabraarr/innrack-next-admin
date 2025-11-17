"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { NavUser } from "./nav-user";
import Image from "next/image";
import logo from "@/public/innrack_logo.png";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Home,
  Boxes,
  Warehouse,
  Package,
  History, 
  SettingsIcon,
  ChevronDown,
  ChevronRight,
  Target,
} from "lucide-react";

export function AppSidebarMenu() {
  const currentPath = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const menuItems = [
    {
      key: "Dashboard",
      href: "/dashboard",
      icon: Home,
      label: "Dashboard",
    },
    {
      key: "product-catalog",
      href: "/dashboard/product-catalog",
      icon: Warehouse,
      label: "Product Catalog",
    },
    {
      key: "order",
      href: "/dashboard/orders",
      icon: Boxes,
      label: "Order",
    },
    {
      key: "shipping-info",
      href: "/dashboard/shipping-info",
      icon: Package,
      label: "Shipping Info",
    },
    {
      key: "item",
      href: "/dashboard/items",
      icon: History,
      label: "Item",
    },
    {
      key: "promo",
      href: "/dashboard/promos",
      icon: SettingsIcon,
      label: "Promo",
      hasSubmenu: true,
      submenu: [
        {
          key: "promo-code",
          href: "/dashboard/promos/promo-codes",
          icon: Target,
          label: "Promo Code",
        },
        {
          key: "promo-code-usage",
          href: "/dashboard/promos/promo-code-usages",
          icon: Target,
          label: "Promo Code Usage",
        },
      ],
    },
  ];

  const toggleSubmenu = (itemKey: string) => {
    setOpenSubmenu(openSubmenu === itemKey ? null : itemKey);
  };

  const isSubmenuActive = (submenu: any[]) => {
    return submenu?.some((subItem) => currentPath === subItem.href);
  };

  return (
    <Sidebar variant="inset" collapsible="offcanvas" className="w-64">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-6 bg-white flex justify-center"
            >
              <Link href="/">
                <Image src={logo} alt="Innrack" width={150} height={60} />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="px-1 py-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-4 px-2 flex items-center gap-2">
            MAIN MENU
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPath === item.href;
                const isSubmenuOpen = openSubmenu === item.key;
                const hasActiveSubmenu =
                  item.hasSubmenu && isSubmenuActive(item.submenu);

                return (
                  <div key={item.key}>
                    {/* Main Menu Item */}
                    <SidebarMenuItem>
                      {item.hasSubmenu ? (
                        <div
                          onClick={() => toggleSubmenu(item.key)}
                          className={`group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                            isActive || hasActiveSubmenu
                              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 border-0"
                              : "hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 dark:hover:from-slate-800 dark:hover:to-blue-950 hover:shadow-md border border-transparent hover:border-blue-200/50 dark:hover:border-blue-800/50"
                          } flex items-center gap-2 p-3 rounded-md w-full text-left h-10`}
                        >
                          {/* Icon */}
                          <div className="relative">
                            <Icon
                              className={`w-5 h-5 transition-all duration-300 ${
                                isActive || hasActiveSubmenu
                                  ? "text-white"
                                  : "text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                              }`}
                            />
                          </div>

                          {/* Text Content */}
                          <div className="flex-1 min-w-0">
                            <div
                              className={`font-medium text-sm transition-colors duration-300 ${
                                isActive || hasActiveSubmenu
                                  ? "text-white"
                                  : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100"
                              }`}
                            >
                              {item.label}
                            </div>
                          </div>

                          {/* Chevron for submenu */}
                          <div className="transition-transform duration-300">
                            {isSubmenuOpen ? (
                              <ChevronDown
                                className={`w-4 h-4 ${
                                  isActive || hasActiveSubmenu
                                    ? "text-white"
                                    : "text-slate-400"
                                }`}
                              />
                            ) : (
                              <ChevronRight
                                className={`w-4 h-4 ${
                                  isActive || hasActiveSubmenu
                                    ? "text-white"
                                    : "text-slate-400"
                                }`}
                              />
                            )}
                          </div>
                        </div>
                      ) : (
                        <SidebarMenuButton
                          asChild
                          className={`group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                            isActive
                              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 border-0"
                              : "hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 dark:hover:from-slate-800 dark:hover:to-blue-950 hover:shadow-md border border-transparent hover:border-blue-200/50 dark:hover:border-blue-800/50"
                          }`}
                        >
                          <Link
                            href={item.href}
                            className="flex items-center gap-2 rounded-md h-10 px-3"
                          >
                            {/* Icon */}
                            <div className="relative">
                              <Icon
                                className={`w-5 h-5 transition-all duration-300 ${
                                  isActive
                                    ? "text-white"
                                    : "text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                                }`}
                              />
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 min-w-0">
                              <div
                                className={`font-medium text-sm transition-colors duration-300 ${
                                  isActive
                                    ? "text-white"
                                    : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100"
                                }`}
                              >
                                {item.label}
                              </div>
                            </div>
                          </Link>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>

                    {/* Submenu Items */}
                    {item.hasSubmenu && item.submenu && (
                      <div
                        className={`mt-1 overflow-hidden transition-all duration-300 ease-in-out ${
                          isSubmenuOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="space-y-1 pl-6">
                          {item.submenu.map((subItem) => {
                            const SubIcon = subItem.icon;
                            const isSubActive = currentPath === subItem.href;

                            return (
                              <SidebarMenuItem key={subItem.key}>
                                <SidebarMenuButton
                                  asChild
                                  className={`group relative overflow-hidden transition-all duration-300 ${
                                    isSubActive
                                      ? "text-blue-600 dark:text-blue-400 font-semibold hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 dark:hover:from-slate-800 dark:hover:to-blue-950 hover:shadow-sm border border-transparent hover:border-blue-200/50 dark:hover:border-blue-800/50"
                                      : "hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 dark:hover:from-slate-800 dark:hover:to-blue-950 hover:shadow-sm border border-transparent hover:border-blue-200/50 dark:hover:border-blue-800/50"
                                  }`}
                                >
                                  <Link
                                    href={subItem.href}
                                    className="flex items-center p-3 rounded-md h-10 pl-4"
                                  >
                                    {/* Sub Text Content */}
                                    <div className="flex-1 min-w-0">
                                      <div
                                        className={`font-medium text-sm transition-colors duration-300 ${
                                          isSubActive
                                            ? "text-blue-600 dark:text-blue-400"
                                            : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100"
                                        }`}
                                      >
                                        {subItem.label}
                                      </div>
                                    </div>
                                  </Link>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
