'use client'
import React from "react";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";



const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className=" bg-white -300 sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between border-r border-gray-200  pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="mb-12 flex cursor-pointer items-center gap-2"
        >
          <Image
            src="/icons/logo.svg"
            width={44}
            height={44}
            alt="logo"
            className="w-[44px] h-[44px] max-xl:w-14 max-xl:h-14"
          />
          <h1 className="font-serif  text-black 2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1 max-xl:hidden">
            Horizon 
          </h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route ||
            pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start', {
                "bg-blue-500": isActive,
              })}
            >
              <div
              className="relative
              size-6">
               <Image
               src={item.imgURL}
               alt={item.label}
               fill>

               </Image>
              </div>
              <div className="text-black">
              <p>{item.label}</p>
               </div>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
