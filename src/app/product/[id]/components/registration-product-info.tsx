interface RegistrationProductInfoProps {
  sku: string | null;
}

export function RegistrationProductInfo({ sku }: RegistrationProductInfoProps) {
  return (
    <div className="flex flex-col gap-3 justify-around">
      <div className="flex gap-1 items-center">
        <p className="text-lg text-gray-3 font-medium">Sku:</p>
        <span className="px-3 text-lg text-gray-3 font-medium">
          {sku ?? "---"}
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <p className="text-lg text-gray-3 font-medium">Categories:</p>
        <span className="px-3 text-sm text-gray-3">
          20% off, 49% off Alex remote
        </span>
      </div>
      <div className="flex gap-1 items-center">
        <p className="text-lg text-gray-3 font-medium">Share:</p>
      </div>
    </div>
  );
}
