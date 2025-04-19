import Image from "next/image"
import star from "@/public/star.svg"

export function Stars() {
  return (
    <div className="flex gap-1 justify-center items-center">
      <Image src={star.src} alt="" width={15} height={15} />
      <Image src={star.src} alt="" width={15} height={15} />
      <Image src={star.src} alt="" width={15} height={15} />
      <Image src={star.src} alt="" width={15} height={15} />
      <Image src={star.src} alt="" width={15} height={15} />
    </div>
  )
}