interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({
  size = "md",
  className = "",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div
      className={`animate-spin rounded-full border-2 border-gray-2 border-t-primary ${sizeClasses[size]} ${className}`}
    ></div>
  );
}

export function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-gray-5 animate-pulse">Carregando...</p>
    </div>
  );
}

export function LoadingCard() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-2 rounded-lg h-48 w-full mb-4"></div>
      <div className="space-y-2">
        <div className="bg-gray-2 rounded h-4 w-3/4"></div>
        <div className="bg-gray-2 rounded h-4 w-1/2"></div>
      </div>
    </div>
  );
}

export function LoadingGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 xl:grid-cols-4 gap-6.5">
      {Array.from({ length: count }, (_, i) => (
        <LoadingCard key={i} />
      ))}
    </div>
  );
}
