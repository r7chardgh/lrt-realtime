import Image from "next/image";
import { fetchLrtDataByStationId } from "./lib/data";
import Link from "next/link";
import RouteList from "@/route.json"
export const runtime = "edge";
export default async function Home() {
  return (
    <main>
      {RouteList.map((r) => (<Link key={r} href={`/route/${r}`} className="p-6 bg-red-300 flex justify-center items-center gap-2"><p>{r}</p></Link>))}
    </main>
  );
}
