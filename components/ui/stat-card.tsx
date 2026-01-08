"use client";

import React from "react";
import { cn } from "@/lib/utils";
import type { StatItem } from "@/types";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ icon, value, label, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1 px-3 py-4 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300",
        className
      )}
    >
      <div className="p-2 bg-primary/10 rounded-lg">{icon}</div>
      <p className="text-lg md:text-2xl font-bold">{value}</p>
      <p className="text-[10px] md:text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

export function StatGrid({ stats }: { stats: StatItem[] }) {
  return (
    <div className="grid grid-cols-3 gap-3 mt-6 w-full max-w-md z-10">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
}
