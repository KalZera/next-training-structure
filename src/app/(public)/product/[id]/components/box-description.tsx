"use client";
import { BoxReviews } from "./box-reviews";
import { useState } from "react";
export function BoxDescription() {
  const [action, setAction] = useState<"description" | "review">("description");
  const active = "border-primary bg-primary text-white";
  const inactive = "border-gray-5 text-gray-6";
  return (
    <div className="flex flex-col gap-3 mt-3">
      <div className="flex gap-4 justify-center items-center my-6">
        <button
          className={`border-1 cursor-pointer ${
            action === "description" ? active : inactive
          } py-3.5 px-8.5 rounded-r-default`}
          onClick={() => setAction("description")}
        >
          <p className="text-xl font-medium">Description</p>
        </button>
        <button
          className={`border-1 cursor-pointer ${
            action === "review" ? active : inactive
          } py-3.5 px-8.5 rounded-r-default`}
          onClick={() => setAction("review")}
        >
          <p className="text-xl font-medium">Reviews</p>
        </button>
      </div>
      <BoxReviews />
    </div>
  );
}
