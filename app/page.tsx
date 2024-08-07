import Image from "next/image";
import { fetchLrtDataByStationId } from "./lib/data";
import Link from "next/link";

export default async function Home() {
  const lrtData = await fetchLrtDataByStationId(1);
  console.log(lrtData);

  return (
    <main >
     <Link href="/station/1">Tuen Mun Ferry Pier</Link>
    </main>
  );
}
