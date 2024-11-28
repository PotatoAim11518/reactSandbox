import { cn } from "../lib/utils";

// eslint-disable-next-line react/prop-types
export default function Skeleton({ className }) {
  return (
    <div
      className={cn(
        "animate-pulse h-4 w-[200px] rounded-full bg-white/20",
        className
      )}
    />
  );
}
