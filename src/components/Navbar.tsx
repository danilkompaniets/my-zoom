import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between fixed z-50 w-full bg-slate-800 px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          alt="logo"
          src={"/icons/logo.svg"}
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <p className="text-white font-bold text-lg max-sm:hidden">Yoom</p>
      </Link>
      <div className="flex flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button>
                
            </Button>
          </SignInButton>
        </SignedOut>
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
