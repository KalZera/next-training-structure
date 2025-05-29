import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-8">
        <SignIn />;
      </div>
    </>
  );
}
