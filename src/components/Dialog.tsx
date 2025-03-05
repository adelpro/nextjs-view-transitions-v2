import { cn } from "@/utils";
import React, {
  ReactNode,
  RefObject,
  startTransition,
  unstable_ViewTransition as ViewTransition,
} from "react";

type DialogProps = {
  dialogRef: RefObject<HTMLDialogElement | null>;
  children: ReactNode;
  hideCloseButton?: boolean;
  className?: string;
};

export default function Dialog({
  dialogRef,
  hideCloseButton = false,
  children,
  className,
}: DialogProps) {
  const closeDialog = () => {
    startTransition(() => {
      dialogRef?.current?.close();
    });
  };

  return (
    <ViewTransition name={"about_dialog"}>
      <dialog
        ref={dialogRef}
        onClick={(event) => {
          if (event.target === dialogRef?.current) {
            closeDialog();
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            closeDialog();
          }
        }}
        className={cn(
          "fixed inset-0 translate-50 z-10 flex items-center justify-center backdrop:bg-zinc-800/50 dark:backdrop:bg-zinc-200/50",
          className
        )}
      >
        <main className="w-full max-w-xl rounded-xl bg-background p-2 pr-5 text-foreground flex flex-col items-center">
          {!hideCloseButton && (
            <div className="self-end">
              <button
                type="button"
                onClick={() => closeDialog()}
                aria-label="Close"
                className="transition-transform duration-200 hover:scale-110 cursor-pointer"
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
          {children}
        </main>
      </dialog>
    </ViewTransition>
  );
}
