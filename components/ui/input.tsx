import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none",
        props.className
      )}
    />
  );
}
