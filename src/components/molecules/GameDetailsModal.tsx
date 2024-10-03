"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function GameDetailsModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const closeModal = () => router.back();

  return (
    <>
      <Dialog defaultOpen onOpenChange={closeModal}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>{children}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
