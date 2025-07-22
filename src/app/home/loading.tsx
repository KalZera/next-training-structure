import { LoadingGrid } from "@/app/components/ui/loading-spinner";

export default function HomeLoading() {
  return (
    <div className="flex flex-col mx-auto w-[90%]">
      <div className="p-auto flex justify-between items-center mt-4">
        <div className="h-10 bg-gray-2 rounded animate-pulse w-64"></div>
      </div>
      <LoadingGrid count={8} />
    </div>
  );
}
