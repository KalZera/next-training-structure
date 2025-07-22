import { LoadingSpinner } from "@/app/components/ui/loading-spinner";

export default function AccountLoading() {
  return (
    <div className="flex flex-col mx-auto w-[90%] my-6">
      <div className="h-8 bg-gray-2 rounded animate-pulse w-32 mb-2"></div>
      <div className="h-4 bg-gray-2 rounded animate-pulse w-80 mb-6"></div>

      <div className="mt-4 space-y-6">
        <div>
          <div className="h-6 bg-gray-2 rounded animate-pulse w-40 mb-4"></div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="h-4 bg-gray-2 rounded animate-pulse w-16"></div>
            <div className="h-4 bg-gray-2 rounded animate-pulse w-32"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="h-4 bg-gray-2 rounded animate-pulse w-20"></div>
            <div className="h-4 bg-gray-2 rounded animate-pulse w-28"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="h-4 bg-gray-2 rounded animate-pulse w-18"></div>
            <div className="h-4 bg-gray-2 rounded animate-pulse w-24"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="h-4 bg-gray-2 rounded animate-pulse w-14"></div>
            <div className="h-4 bg-gray-2 rounded animate-pulse w-20"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="h-4 bg-gray-2 rounded animate-pulse w-16"></div>
            <div className="h-4 bg-gray-2 rounded animate-pulse w-22"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="h-4 bg-gray-2 rounded animate-pulse w-16"></div>
            <div className="h-4 bg-gray-2 rounded animate-pulse w-24"></div>
          </div>
        </div>

        <div className="h-10 bg-gray-2 rounded animate-pulse w-32"></div>
      </div>

      <div className="flex justify-center mt-8">
        <LoadingSpinner size="md" />
      </div>
    </div>
  );
}
