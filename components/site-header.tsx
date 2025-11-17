import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeSelector } from "./theme-selector";
import { cn } from "@/lib/utils";

export async function SiteHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background rounded-tr-2xl rounded-tl-2xl group-has-data-[collapsible=icon]/sidebar-wrapper:h-14 flex h-14 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear will-change-transform"
      )}
    >
      <div className="flex w-full items-center gap-1 px-5 lg:gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        {/* <h1 className="text-base font-medium">Innrack</h1> */}
        <div className="flex flex-row ml-auto gap-2">
          <ThemeSelector />
        </div>
      </div>
    </header>
  );
}
