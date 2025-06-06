import Image from "next/image";
import success from "@/public/success.svg";
import Link from "next/link";

export default function Success() {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-8">
        <div className="flex items-center justify-center my-4">
          <Image
            src={success.src}
            alt="Success Icon"
            width={100}
            height={100}
          />
        </div>
        <h1 className="text-2xl font-bold m-4">Your order is Completed!</h1>
        <p className="m-4 max-w-lg ">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>
        <Link href="/">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 m-4 cursor-pointer"
            type="button"
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </>
  );
}
