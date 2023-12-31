import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="absolute bottom-0 h-16 lg:h-12 w-full border-t font font-medium flex justify-between text-lg lg:text-base text-secondary-gray bg-foreground">
      <div className="flex h-full">
        <div className="h-full flex items-center border-r px-3 lg:px-6 w-full lg:w-fit">
          find me in:
        </div>
        <Link
          href={`https://twitter.com/cwd_harshit`}
          className="h-full flex items-center border-r px-6 hover:bg-hover-box transition-all duration-300 ease-in-out font-medium cursor-pointer"
          target="_blank"
        >
          <TwitterIcon size={20} />
        </Link>
        <Link
          href={`https://www.linkedin.com/in/cwd-harshit`}
          className="h-full flex items-center border-r px-6 hover:bg-hover-box transition-all duration-300 ease-in-out font-medium cursor-pointer"
          target="_blank"
        >
          <LinkedinIcon size={20} />
        </Link>
        <Link
          href={`https://www.instagram.com/cwd.harshit`}
          className="h-full lg:flex items-center border-r px-6 hover:bg-hover-box transition-all duration-300 ease-in-out font-medium cursor-pointer hidden"
          target="_blank"
        >
          <InstagramIcon size={20} />
        </Link>
      </div>
      <Link
        href={`/`}
        className="h-full flex items-center gap-2 border-l px-6 hover:bg-hover-box transition-all duration-300 ease-in-out font-medium cursor-pointer"
      >
        <p className="hidden lg:flex">@c-w-d-harshit</p>
        <GithubIcon />
      </Link>
    </div>
  );
}
