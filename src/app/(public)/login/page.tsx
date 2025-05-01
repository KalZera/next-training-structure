import Image from "next/image";
import Logo from "@/public/logo.svg";
import { Input } from "./components/inputs";

export default function Login() {
  return (
    <div className="flex flex-col mx-auto w-[90%] min-h-40">
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <div className="bg-primary w-[330px] my-3 flex justify-center items-center py-5">
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
          <Input type="email" initialValue="" placeholder="Enter your email" />
        </div>
        <div>
          <p>Password</p>
          <Input
            type="password"
            initialValue=""
            placeholder="Enter your password"
          />
        </div>
        <div className="flex w-[330px]">
          <button className="bg-primary text-white rounded-md p-2 mt-2 w-full">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
