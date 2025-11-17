import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebarMenu } from "@/components/app-sidebar-menu";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { ApolloWrapper } from "@/components/apollo-wrapper";
import { ActiveThemeProvider } from "@/components/active-theme-provider";
import { cookies } from "next/headers";
import { Toaster } from "sonner";

export default async function MasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
      enableColorScheme
    >
      <ActiveThemeProvider>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebarMenu />
          <SidebarInset>
            <SiteHeader />
            <main>
              <ApolloWrapper>{children}</ApolloWrapper>
            </main>
            <Toaster className="text-primary" closeButton />
          </SidebarInset>
        </SidebarProvider>
      </ActiveThemeProvider>
    </ThemeProvider>
  );
}
