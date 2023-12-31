"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export default function Header() {
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
    <div className="h-16 lg:h-12 w-full border-b font font-medium flex justify-between text-lg lg:text-base">
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
        href={"/contact-us"}
        className={cn(
          "text-secondary-gray h-full border-l items-center px-8 hover:bg-hover-box transition-all duration-300 ease-in-out font-medium hidden lg:flex",
          {
            "text-white border-b-2 border-b-accent-orange":
              path === "/contact-us",
          }
        )}
      >
        <p>_contact-me</p>
      </Link>
      <Button
        size={"icon"}
        variant={"ghost"}
        className="h-full items-center text-secondary-gray mr-3 lg:hidden"
      >
        <MenuIcon size={28} />
      </Button>
    </div>
  );
}
