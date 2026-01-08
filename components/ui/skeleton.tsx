"use client";

import React from "react";

export function SectionSkeleton() {
  return (
    <div className="w-full py-20 md:py-32 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="h-10 w-64 bg-muted rounded animate-pulse" />
          <div className="h-6 w-96 bg-muted rounded animate-pulse" />
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-48 bg-muted/50 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg animate-pulse" />
        <div className="space-y-2">
          <div className="h-5 w-32 bg-muted rounded animate-pulse" />
          <div className="h-4 w-24 bg-muted rounded animate-pulse" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 w-full bg-muted rounded animate-pulse" />
        <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
      </div>
    </div>
  );
}

export function FormSkeleton() {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 space-y-6">
      <div className="space-y-4">
        <div className="h-5 w-32 bg-muted rounded animate-pulse" />
        <div className="h-12 w-full bg-muted rounded animate-pulse" />
      </div>
      <div className="space-y-4">
        <div className="h-5 w-32 bg-muted rounded animate-pulse" />
        <div className="h-12 w-full bg-muted rounded animate-pulse" />
      </div>
      <div className="space-y-4">
        <div className="h-5 w-32 bg-muted rounded animate-pulse" />
        <div className="h-32 w-full bg-muted rounded animate-pulse" />
      </div>
      <div className="h-12 w-full bg-muted rounded animate-pulse" />
    </div>
  );
}

export function TimelineSkeleton() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="pl-10 md:pl-12 relative">
          <div className="absolute left-0 top-0 w-6 h-6 bg-primary/20 rounded-full animate-pulse" />
          <div className="bg-white/30 dark:bg-card/80 p-6 rounded-md backdrop-blur-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full animate-pulse" />
              <div className="space-y-2">
                <div className="h-6 w-48 bg-muted rounded animate-pulse" />
                <div className="h-4 w-32 bg-muted rounded animate-pulse" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-muted rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-muted rounded animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
