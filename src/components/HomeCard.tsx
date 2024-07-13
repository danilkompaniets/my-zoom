"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface HomeCardProps {
  heading: string;
  description: string;
  iconUrl: string;
  handleClick: () => void;
  className?: string;
}

const HomeCard = ({
  className,
  heading,
  description,
  iconUrl,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        "bg-orange-500 px-4 py-6 flex flex-col justify-between rounded-lg w-full xl:max-w-[270px] min-h-[260px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphizm bg-gray-100/20 size-12 p-3 rounded-[10px]">
        <Image alt="plus" src={iconUrl} width={30} height={30} className="" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{heading}</h1>
        <p className="text-lg font-medium">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
