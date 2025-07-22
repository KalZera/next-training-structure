import { LoadingSpinner } from "@/app/components/ui/loading-spinner";

export default function LoginLoading() {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="w-full max-w-md">
        {/* Login form skeleton */}
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="h-8 bg-gray-2 rounded animate-pulse w-32 mx-auto"></div>
            <div className="h-4 bg-gray-2 rounded animate-pulse w-48 mx-auto"></div>
          </div>

          {/* Form fields */}
          <div className="space-y-4">
            <div>
              <div className="h-4 bg-gray-2 rounded animate-pulse w-16 mb-2"></div>
              <div className="h-10 bg-gray-2 rounded animate-pulse w-full"></div>
            </div>
            <div>
              <div className="h-4 bg-gray-2 rounded animate-pulse w-20 mb-2"></div>
              <div className="h-10 bg-gray-2 rounded animate-pulse w-full"></div>
            </div>
          </div>

          {/* Submit button */}
          <div className="h-12 bg-gray-2 rounded animate-pulse w-full"></div>

          {/* Divider */}
          <div className="flex items-center space-x-4">
            <div className="flex-1 h-px bg-gray-2"></div>
            <div className="h-4 bg-gray-2 rounded animate-pulse w-8"></div>
            <div className="flex-1 h-px bg-gray-2"></div>
          </div>

          {/* Social login buttons */}
          <div className="space-y-3">
            <div className="h-10 bg-gray-2 rounded animate-pulse w-full"></div>
            <div className="h-10 bg-gray-2 rounded animate-pulse w-full"></div>
          </div>

          {/* Footer links */}
          <div className="text-center">
            <div className="h-4 bg-gray-2 rounded animate-pulse w-40 mx-auto"></div>
          </div>
        </div>

        {/* Loading spinner overlay */}
        <div className="flex justify-center mt-4">
          <LoadingSpinner size="md" />
        </div>
      </div>
    </div>
  );
}
