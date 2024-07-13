"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "../../constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger className="flex items-center justify-center">
          <MenuIcon width={36} height={36} className="text-white" />
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-slate-800 border-none">
          <SheetTitle className="flex gap-2">
            <Link href={"/"} className="flex items-center gap-1">
              <Image
                alt="logo"
                src={"/icons/logo.svg"}
                width={32}
                height={32}
                className="max-sm:size-10"
              />
              <p className="text-white font-bold z-20 text-lg">Yoom</p>
            </Link>
          </SheetTitle>
          <div className="flex flex-col h-[calc(100vh-72px)] justify-between overflow-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link, id) => {
                  const isActive =
                    pathname === link.route ||
                    pathname.startsWith(`${link.route}/`);

                  return (
                    <SheetClose asChild>
                      <Link
                        key={id}
                        href={link.route}
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-lg justify-start",
                          {
                            "bg-blue-400": isActive,
                          }
                        )}
                      >
                        <Image
                          src={link.imgUrl}
                          alt={link.label}
                          width={24}
                          height={24}
                        />
                        <p className="text-lg font-semibold ">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
