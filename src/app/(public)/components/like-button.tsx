"use client";
import { useState } from "react";
import Image from "next/image";
import likeIcon from "@/public/like-icon-product.svg";
import likeIconFilled from "@/public/like-icon-filled.svg";

export function LikeButton({ liked }: { liked?: boolean }) {
  const [isLiked, setIsLiked] = useState(liked || false);
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      className="bg-button-1 p-1.5 rounded-full h-fit cursor-pointer"
      onClick={handleLikeClick}
    >
      <Image
        src={isLiked ? likeIconFilled.src : likeIcon.src}
        alt="like"
        width={24}
        height={24}
        className="object-contain"
      />
    </button>
  );
}
