
'use client'
import React from 'react'
import image from 'next/image'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
const MobileNav = ({user}: MobileNavProps) => {
    const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px] flex flex-col gap-4">
      <Sheet>
  <SheetTrigger>
    <Image
    src="/icons/hamburger.svg"
    width={30}
    height={30}
    alt="menu"
    className="cursor-pointer"
    />
  </SheetTrigger>
  <SheetContent side="left">
    
        <Link
          href="/"
          className="mb-12 flex cursor-pointer items-center gap-2"
        >
          <image
            src="/icons/logo.svg"
            width={44}
            height={44}
            alt="logo"
            className="flex w-[44px] h-[44px] max-xl:w-14 max-xl:h-14"
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
               <image
               src={item.imgURL}
               alt={item.label}
               fill>

               </image>
              </div>
              <div className="text-black">
              <p>{item.label}</p>
               </div>
            </Link>
          );
        })}
    
  </SheetContent>
</Sheet>
    </section>
  )
}

export default MobileNav
