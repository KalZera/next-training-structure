import { SignIn } from "@clerk/nextjs";
import LoginContent from "./components/layout/login-content";

export default function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-8">
        <SignIn />
        <LoginContent />
      </div>
    </>
  );
}
