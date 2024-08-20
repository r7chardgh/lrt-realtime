import Image from "next/image";
import { fetchLrtDataByStationId } from "./lib/data";
import Link from "next/link";
export const runtime = "edge";
export default async function Home() {
  return (
    <main>
      <Link href="/station/1">Tuen Mun Ferry Pier</Link>
    </main>
  );
}
