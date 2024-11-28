import Skeleton from "./Skeleton";

export default function ListSkeleton() {
  return (
    <li className="flex flex-col items-center gap-y-4">
      <Skeleton className="w-[300px]" />
      <Skeleton className="w-[100px]" />
      <Skeleton className="w-[120px]" />
    </li>
  );
}
