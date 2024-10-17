import Link from "next/link";
import { notoserifhk } from "./font";

export default function Footer() {
  return (
    <footer className="bg-lrt_blue text-white py-3 text-sm">
      <div className="flex w-full justify-center  flex-col sm:flex-row items-center">
        <span className="flex ">
          Made with{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            data-slot="icon"
            className="mx-1 w-4"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <defs>
              <linearGradient id="btt">
                <stop offset="0" stopColor="#7a9ab8">
                  <animate
                    dur="2s"
                    attributeName="offset"
                    fill="freeze"
                    from="0"
                    to="1"
                  />
                </stop>
                <stop offset="0" stopColor="#fff">
                  <animate
                    dur="2s"
                    attributeName="offset"
                    fill="freeze"
                    from="0"
                    to="1"
                  />
                </stop>
              </linearGradient>
            </defs>
            <path
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="url(#btt)"
            ></path>
          </svg>
          <p className={`${notoserifhk.className}`}>{" 用心製造 "}</p>
        </span>
        <span className=" hidden sm:block">&nbsp;|&nbsp;</span>
        <div>
          Copyright © 2024&nbsp;
          <Link
            href="https://richardtsang.vercel.app/"
            className="hover:underline"
          >
            Richard Tsang
          </Link>
        </div>
      </div>
    </footer>
  );
}
