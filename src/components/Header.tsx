"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { MenuIcon, XIcon } from "lucide-react";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const path = usePathname();
  const menu = [
    {
      label: "_hello",
      path: "/",
    },
    {
      label: "_about-me",
      path: "/about-me",
    },
    {
      label: "_projects",
      path: "/projects",
    },
  ];
  return (
    <div className="relative">
      <div className="h-16 lg:h-12 w-full border-b font font-medium flex items-center justify-between text-lg lg:text-base">
        <div className="flex h-full">
          <Link
            href={`/`}
            className="text-secondary-gray h-full w-72 lg:border-r flex items-center px-5 hover:bg-hover-box transition-all duration-300 ease-in-out font-medium"
          >
            <p>harshit-sharma</p>
          </Link>
          <div className="h-full hidden lg:flex">
            {menu?.map((item, index) => {
              return (
                <Link
                  href={item.path}
                  className={cn(
                    "text-secondary-gray h-full border-r flex items-center px-8 hover:bg-hover-box transition-all duration-300 ease-in-out font-medium group relative",
                    {
                      "text-white": path === item.path,
                    }
                  )}
                  key={index}
                >
                  <p>{item.label}</p>
                  <div
                    className={cn(
                      "w-full h-0 bg-accent-orange absolute bottom-0 left-0 transition-all ease-in-out",
                      {
                        "h-0.5": path === item.path,
                      }
                    )}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <Link
          href={"/contact-me"}
          className={cn(
            "text-secondary-gray h-full border-l items-center px-8 hover:bg-hover-box transition-all duration-300 ease-in-out font-medium hidden lg:flex",
            {
              "text-white border-b-2 border-b-accent-orange":
                path === "/contact-me",
            }
          )}
        >
          <p>_contact-me</p>
        </Link>
        <Button
          size={"icon"}
          variant={"ghost"}
          className="flex h-10 w-10 items-center text-secondary-gray mr-3 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <XIcon size={28} /> : <MenuIcon size={28} />}
        </Button>
      </div>
      <div
        className={cn(
          "absolute top-16 w-full hidden overflow-hidden transition-all duration-500 bg-foreground drop-shadow-2xl",
          {
            " block": open,
          }
        )}
      >
        <Link
          href={`/`}
          className={cn(
            "h-16 lg:h-12 w-full border-b font font-medium flex items-center justify-between text-lg lg:text-base px-5 text-secondary-gray",
            { "text-white": path === "/" }
          )}
          onClick={() => setOpen(!open)}
        >
          _hello
        </Link>
        <Link
          href={`/about-me`}
          className={cn(
            "h-16 lg:h-12 w-full border-b font font-medium flex items-center justify-between text-lg lg:text-base px-5 text-secondary-gray",
            { "text-white": path === "/about-me" }
          )}
          onClick={() => setOpen(!open)}
        >
          _about-me
        </Link>
        <Link
          href={`/projects`}
          className={cn(
            "h-16 lg:h-12 w-full border-b font font-medium flex items-center justify-between text-lg lg:text-base px-5 text-secondary-gray",
            { "text-white": path === "/projects" }
          )}
          onClick={() => setOpen(!open)}
        >
          _projects
        </Link>
        <Link
          href={`/contact-me`}
          className={cn(
            "h-16 lg:h-12 w-full border-b font font-medium flex items-center justify-between text-lg lg:text-base px-5 text-secondary-gray",
            { "text-white": path === "/contact-me" }
          )}
          onClick={() => setOpen(!open)}
        >
          _contact-me
        </Link>
      </div>
    </div>
  );
}
