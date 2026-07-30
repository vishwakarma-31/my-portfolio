"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background-primary text-text-primary px-6">
      <div className="max-w-2xl w-full text-center flex flex-col items-center">
        <h1 className="type-display-l mb-6 text-text-primary">
          404 <span className="text-text-muted font-normal">Not Found</span>
        </h1>
        <p className="type-body text-text-secondary mb-12 max-w-lg mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back to the showcase.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/">
            <Button variant="default" className="min-w-[160px]">
              Return Home
            </Button>
          </Link>
          <Link href="/#work">
            <Button variant="ghost" className="min-w-[160px]">
              View Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
