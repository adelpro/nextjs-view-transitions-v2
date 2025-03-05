import { cn } from "@/utils";
import React, { ReactNode, useLayoutEffect } from "react";

type DialogProps = {
  ref: React.RefObject<HTMLDialogElement | null>;
  children: ReactNode;
  hideCloseButton?: boolean;
  className?: string;
  closeButtonLeft?: boolean;
};

export default function Dialog({
  ref: dialogRef,
  hideCloseButton = false,
  closeButtonLeft = false,
  className,
  children,
}: DialogProps) {
  const closeDialog = () => {
    dialogRef.current?.close();
  };
  useLayoutEffect(() => {
    if (dialogRef.current?.open) {
      dialogRef.current?.showModal();
      return;
    }
    dialogRef.current?.close();
  }, [dialogRef]);

  return (
    <dialog
      ref={dialogRef}
      onClick={(event) => {
        if (event.target === dialogRef.current) {
          dialogRef.current?.close();
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          dialogRef.current?.close();
        }
      }}
      className="rounded-xl backdrop:bg-zinc-800/50 dark:backdrop:bg-zinc-200/50"
    >
      <main className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-xl rounded-xl bg-background p-2 text-foreground">
        {!hideCloseButton && (
          <div
            className={cn(
              "flex justify-end items-center p-2",
              closeButtonLeft && "justify-start"
            )}
          >
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Close"
              className=" cursor-pointer transition-transform duration-200 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#6B7280"
                aria-hidden="true"
                focusable="false"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#6B7280"
                  d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"
                />
                <path
                  fill="#6B7280"
                  d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                />
              </svg>
            </button>
          </div>
        )}
        <div className={className}>{children}</div>
      </main>
    </dialog>
  );
}
