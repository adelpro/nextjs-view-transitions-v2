"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Dialog from "./Dialog";

export default function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };
  return (
    <>
      <div className="flex gap-2 items-center justify-center sm:justify-end w-full m-2 mb-5">
        <Link className="" href="/">
          <button className="rounded cursor-pointer transition-transform transform hover:scale-105 flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path
                fill="currentColor"
                d="m33.71 17.29l-15-15a1 1 0 0 0-1.41 0l-15 15a1 1 0 0 0 1.41 1.41L18 4.41l14.29 14.3a1 1 0 0 0 1.41-1.41Z"
              />
              <path
                fill="currentColor"
                d="M28 32h-5V22H13v10H8V18l-2 2v12a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76l-2-2Z"
              />
              <path fill="none" d="M0 0h36v36H0z" />
            </svg>
            <span className="hidden sm:block">Back</span>
          </button>
        </Link>
        <button
          onClick={openDialog}
          className="rounded cursor-pointer transition-transform transform hover:scale-105 flex gap-2 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"
            />
          </svg>
          <span className="hidden sm:block">About</span>
        </button>
      </div>

      <Dialog ref={dialogRef} className="flex justify-center items-center">
        <div className="h-20 flex justify-center items-center">
          <p>Welcome To My Pokemon Collection Web Application</p>
        </div>
      </Dialog>
    </>
  );
}
