import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "min-h-32 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none",
        props.className
      )}
    />
  );
}
