import { LoadingGrid } from "@/app/components/ui/loading-spinner";

export default function FavoritesLoading() {
  return (
    <div className="flex flex-col mx-auto w-[90%] my-6">
      <div className="h-8 bg-gray-2 rounded animate-pulse w-32 mb-4"></div>
      <div className="mt-4">
        <LoadingGrid count={6} />
      </div>
    </div>
  );
}
