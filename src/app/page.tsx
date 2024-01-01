import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full flex items-center justify-center py-5 px-6">
      <div className="css-blurry-gradient-blue"></div>
      <div className="css-blurry-gradient-green"></div>
      <div className="h-full w-full max-w-screen-xl flex flex-col lg:flex-row">
        <div className="h-full w-full lg:w-1/2 flex flex-col justify-center">
          <h3 className="text-xl font-medium mb-1">Hi all, I am</h3>
          <h1 className="text-4xl lg:text-6xl font-medium">Harshit Sharma</h1>
          <div className="flex items-center gap-1 lg:gap-2 text-secondary text-xl lg:text-4xl font-semibold lg:font-medium my-2 mb-8 lg:mb-20">
            <ChevronRightIcon
              size={28}
              className="font-medium lg:font-semibold text-xl lg:text-4xl"
            />
            <p className="">Full-stack devloper</p>
          </div>
          <p className="text-secondary-gray">
            {"// you can also see it on my Github page"}
          </p>
          <p className="text-secondary font-medium">
            const <span className="text-accent-green">githubLink</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-accent-orange">
              {'"https://github.com/username"'}
            </span>
          </p>
        </div>
        <div className="h-full w-full lg:w-1/2 flex flex-col justify-center items-center">
          <div className="relative home__image">
            <Image
              src="/profile.jpg"
              fill
              alt="profile_img"
              className="object-contain rounded-3xl z-20"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
