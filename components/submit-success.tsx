import { useIsMobile } from "@/hooks/use-mobile";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Drawer, DrawerContent } from "./ui/drawer";
import { CircleCheckBigIcon } from "lucide-react";

export default function SubmitSuccess() {
  const isMobile = useIsMobile();
  return isMobile ? (
    <Drawer>
      <DrawerContent className="h-150 pt-6 px-4">
        <DialogTitle className="sr-only">Sukses</DialogTitle>
        <h2 className="text-lg font-semibold mb-4 text-teal-500">
          <div className="flex flex-row gap-2">
            <CircleCheckBigIcon />
            Data Berhasil di Simpan
          </div>
        </h2>
      </DrawerContent>
    </Drawer>
  ) : (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Berhasil</DialogTitle>
        <DialogDescription className="text-lg font-semibold text-teal-500">
          <div className="flex flex-row gap-2">
            <CircleCheckBigIcon />
            Data Berhasil di Simpan
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}
