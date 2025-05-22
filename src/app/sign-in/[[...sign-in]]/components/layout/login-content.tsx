"use client";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { Input } from "../inputs";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { useSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function LoginContent() {
  const { signIn } = useSignIn();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const auth = await signIn?.create({
      identifier: email as string,
      password: password as string,
    });

    if (auth?.status === "complete") {
      redirect("/account");
    }
  };

  return (
    <div className="flex flex-col mx-auto items-center justify-center w-[90%] min-h-40">
      <div className="flex flex-col items-center justify-center h-full gap-4 border-1 p-3 rounded-r-default">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col items-center"
        >
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
            <Input
              type="email"
              name="email"
              initialValue=""
              placeholder="Enter your email"
            />
          </div>
          <div>
            <p>Password</p>
            <Input
              type="password"
              name="password"
              initialValue=""
              placeholder="Enter your password"
            />
          </div>
          <div className="flex w-[330px]">
            <button className="bg-primary text-white rounded-md p-2 mt-2 w-full">
              Login
            </button>
          </div>
        </form>
        <div>OR</div>
        <div className="flex w-[330px] gap-2">
          <button className="flex bg-primary text-white rounded-md p-2 mt-2 w-full justify-center items-center gap-2">
            <GoogleOutlined />
            <p>Google</p>
          </button>
          <button className="flex bg-primary text-white rounded-md p-2 mt-2 w-full justify-center items-center gap-2">
            <FacebookOutlined />
            <p>Facebook</p>
          </button>
        </div>
      </div>
    </div>
  );
}
