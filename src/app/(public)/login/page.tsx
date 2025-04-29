import Image from "next/image";
import Logo from "@/public/logo.svg";
export default function Login() {
  return (
    <div className="flex flex-col mx-auto w-[90%] min-h-40">
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <div className="h-[52px] bg-primary w-[330px] mt-3 flex justify-center items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            height={48}
            className="object-cover"
          />
        </div>
        <div>
          <p>E-mail</p>
          <input
            type="email"
            className="border-2 border-gray-300 rounded-r-default p-2"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            className="border-2 border-gray-300 rounded-r-default p-2"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <button className="bg-primary text-white rounded-md p-2 mt-2">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
