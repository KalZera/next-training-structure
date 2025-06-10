import Image from "next/image";

import Avatar from "@/public/avatar-bitmoji.png";

export default function Initial() {
  return (
    <div className="flex flex-col mx-auto w-[70%] my-20">
      <h1 className="text-3xl font-semibold text-second my-4 text-center">
        Welcome
      </h1>
      <div className="grid grid-cols-2 gap-6">
        <p className="text-second text-lg font-normal my-4">
          <p className="text-center">Hello, This is a part of my portfolio</p>
          <br /> i am <strong>Alexander Karuzo</strong>, i like to code and work
          with that since 2017, i have worked with many technologies like{" "}
          <span className="text-second font-bold">
            React, Node.js, PostgreSQL, MySQL, Tailwind CSS
          </span>{" "}
          and many more. <br />
          <br />
          this project is a simple e-commerce website built with{" "}
          <span className="text-second font-semibold">
            Next.js, React, Tailwind CSS,
          </span>{" "}
          <span className="text-second font-semibold">Stripe</span> for payments
          and <span className="text-second font-semibold"> Clerk</span> for
          authentication.
          <br />
          <br />
          it is a simple project to show my skills and knowledge in web
          development, it is NOT A REAL E-COMMERCE website.
          <br />
          <br />
          If you want to see more of my work, you can visit my github profile at{" "}
          <a
            className="text-second font-semibold decoration-2 hover:underline"
            href="https://github.com/KalZera"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/KalZera
          </a>
          <br />
          <br />
          This project is not finished yet, i will be adding more features and
          improving the design in the future, so stay tuned for updates!
        </p>
        <span className="flex justify-center items-center max-w-[300px] mx-auto ">
          <Image
            src={Avatar.src}
            alt="My avatar"
            width={500}
            height={500}
            className="rounded-full shadow-lg cover-image"
            loading="lazy"
          />
        </span>
      </div>
    </div>
  );
}
