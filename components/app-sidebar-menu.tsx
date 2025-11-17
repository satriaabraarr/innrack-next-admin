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
import { useState, useEffect } from "react";
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
import { useThemeConfig } from "@/components/active-theme-provider";

export function AppSidebarMenu() {
  const currentPath = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { activeTheme } = useThemeConfig();

  // Debug active theme
  useEffect(() => {
    console.log("Active Theme:", activeTheme);
  }, [activeTheme]);

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

  // Fallback color berdasarkan theme
  const getThemeColor = () => {
    switch (activeTheme) {
      case 'blue':
      case 'blue-scaled':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'green':
      case 'green-scaled':
        return 'bg-green-500 hover:bg-green-600';
      case 'amber':
      case 'amber-scaled':
        return 'bg-amber-500 hover:bg-amber-600';
      case 'violet':
      case 'violet-scaled':
        return 'bg-violet-500 hover:bg-violet-600';
      case 'mono-scaled':
        return 'bg-gray-600 hover:bg-gray-700';
      default:
        return 'bg-slate-500 hover:bg-slate-600';
    }
  };

  const getThemeShadow = () => {
    switch (activeTheme) {
      case 'blue':
      case 'blue-scaled':
        return 'shadow-blue-500/30';
      case 'green':
      case 'green-scaled':
        return 'shadow-green-500/30';
      case 'amber':
      case 'amber-scaled':
        return 'shadow-amber-500/30';
      case 'violet':
      case 'violet-scaled':
        return 'shadow-violet-500/30';
      case 'mono-scaled':
        return 'shadow-gray-500/30';
      default:
        return 'shadow-slate-500/30';
    }
  };

  const getTextHoverColor = () => {
    switch (activeTheme) {
      case 'blue':
      case 'blue-scaled':
        return 'group-hover:text-blue-600';
      case 'green':
      case 'green-scaled':
        return 'group-hover:text-green-600';
      case 'amber':
      case 'amber-scaled':
        return 'group-hover:text-amber-600';
      case 'violet':
      case 'violet-scaled':
        return 'group-hover:text-violet-600';
      case 'mono-scaled':
        return 'group-hover:text-gray-600';
      default:
        return 'group-hover:text-slate-600';
    }
  };

  const getActiveTextColor = () => {
    switch (activeTheme) {
      case 'blue':
      case 'blue-scaled':
        return 'text-blue-600';
      case 'green':
      case 'green-scaled':
        return 'text-green-600';
      case 'amber':
      case 'amber-scaled':
        return 'text-amber-600';
      case 'violet':
      case 'violet-scaled':
        return 'text-violet-600';
      case 'mono-scaled':
        return 'text-gray-600';
      default:
        return 'text-slate-600';
    }
  };

  const themeColor = getThemeColor();
  const themeShadow = getThemeShadow();
  const textHoverColor = getTextHoverColor();
  const activeTextColor = getActiveTextColor();

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
          <SidebarGroupLabel className="text-xs font-semibold text-slate-400 mb-4 px-2 flex items-center gap-2">
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
                              ? `${themeColor} text-white shadow-lg ${themeShadow} border-0`
                              : "hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 hover:shadow-md border border-transparent hover:border-blue-200/50"
                          } flex items-center gap-2 p-3 rounded-md w-full text-left h-10`}
                        >
                          {/* Icon */}
                          <div className="relative">
                            <Icon
                              className={`w-5 h-5 transition-all duration-300 ${
                                isActive || hasActiveSubmenu
                                  ? "text-white"
                                  : `text-gray-900 ${textHoverColor}`
                              }`}
                            />
                          </div>

                          {/* Text Content */}
                          <div className="flex-1 min-w-0">
                            <div
                              className={`font-medium text-sm transition-colors duration-300 ${
                                isActive || hasActiveSubmenu
                                  ? "text-white"
                                  : "text-gray-900 group-hover:text-gray-900"
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
                                    : "text-gray-900"
                                }`}
                              />
                            ) : (
                              <ChevronRight
                                className={`w-4 h-4 ${
                                  isActive || hasActiveSubmenu
                                    ? "text-white"
                                    : "text-gray-900"
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
                              ? `${themeColor} text-white shadow-lg ${themeShadow} border-0`
                              : "hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 hover:shadow-md border border-transparent hover:border-blue-200/50"
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
                                    : `text-gray-900 ${textHoverColor}`
                                }`}
                              />
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 min-w-0">
                              <div
                                className={`font-medium text-sm transition-colors duration-300 ${
                                  isActive
                                    ? "text-white"
                                    : "text-gray-900 group-hover:text-gray-900"
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
                                      ? `${activeTextColor} font-semibold hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 hover:shadow-sm border border-transparent hover:border-blue-200/50`
                                      : "hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 hover:shadow-sm border border-transparent hover:border-blue-200/50"
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
                                            ? activeTextColor
                                            : "text-gray-900 group-hover:text-gray-900"
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
