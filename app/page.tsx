
import { fetchLrtDataByStationId } from "./lib/data";
import Link from "next/link";
import RouteList from "@/route.json"
export const runtime = "edge";
export default async function Home() {
  return (
    <main className="flex justify-center items-center w-full p-12 ">
      <div className="flex flex-col gap-4 flex-wrap w-full">

      {RouteList.map((r) => (<Link key={r} href={`/route/${r}`} className="w-full flex-1 p-6  flex justify-center items-center gap-2"><p className="w-24 text-lg rounded-3xl border-4 border-green-400 flex justify-center outline">{r}</p></Link>))}
      </div>
    </main>
  );
}
