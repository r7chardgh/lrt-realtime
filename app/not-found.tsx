"use client";
import Image from "next/image";
import { notosans, notoserifhk } from "./ui/font";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Page() {
  let pathname = usePathname().split("/").slice(0, -1).join("/");
  if (pathname.length === 0) {
    pathname = "/";
  }

  return (
    <main className="flex justify-center min-h-dvh p-6 bg-gray-200">
      <Link
        href={pathname}
        className="flex flex-col p-12 bg-gray-300 max-w-[30em] w-full h-auto  justify-center items-center rounded-lg gap-3"
      >
        <Image
          width={0}
          height={0}
          src="/lrt-warning.svg"
          alt="train icon reveals train length"
          className="w-auto h-auto"
        />
        <div
          className={`${notoserifhk.className} font-semibold text-4xl sm:text-5xl text-center tracking-widest leading-[1.2]`}
        >
          <p>為閣下著想</p>
          <p>請回到上一頁</p>
        </div>
        <div
          className={`${notosans} font-medium text-lg text-center leading-none`}
        >
          <p>For your sake</p>
          <p>please go back to the previous page</p>
        </div>
      </Link>
    </main>
  );
}
