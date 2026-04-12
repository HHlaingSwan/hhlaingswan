import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CV",
  description: "View my CV.",
};

export default function CvPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">Curriculum Vitae</h1>
          <p className="text-sm text-muted-foreground">
            This is my CV. I hope you like it. You can download it from the
            button below.
          </p>
        </div>

        <div className="rounded-2xl border border-border/60 overflow-hidden bg-card">
          <object
            data="/cv.pdf"
            type="application/pdf"
            className="w-full h-[75vh]"
          >
            <div className="p-6">
              <p className="text-sm text-muted-foreground">
                CV PDF is not available yet.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                You can also request it via{" "}
                <a
                  href="mailto:htethlaingswan@gmail.com"
                  className="underline underline-offset-4"
                >
                  email
                </a>
                .
              </p>
            </div>
          </object>
        </div>
      </div>
    </main>
  );
}
