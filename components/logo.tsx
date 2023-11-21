import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import localFont from "next/font/local";
const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href={"/"}>
      {/* 小于  768 就 hidden 了，md 的时候就 flex 了 */}
      <div className="hover:opacity-75 transition md:flex items-center gap-x-2 hidden">
        <Image src="/logo.svg" alt="Logo" height={30} width={30} />
        <p className={cn("text-lg text-neutral-700 pb-1", headingFont)}>
          Taskify
        </p>
      </div>
    </Link>
  );
};
