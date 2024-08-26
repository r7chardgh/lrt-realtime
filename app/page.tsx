import { fetchLrtDataByStationId } from "./lib/data";
import Link from "next/link";
import RouteList from "@/route.json";
export const runtime = "edge";
export default async function Home() {
  const colorVariants: any = {
    505: "border-c_505",
    507: "border-c_507",
    610: "border-c_610",
    614: "border-c_614",
    "614p": "border-c_614p",
    615: "border-c_615",
    "615p": "border-c_615p",
    705: "border-c_705",
    706: "border-c_706",
    751: "border-c_751",
    "761p": "border-c_761p",
  };
  return (
    <main className="flex justify-center items-center w-full p-12 ">
      <div className="flex flex-col gap-4 flex-wrap w-full">
        {RouteList.map((r) => (
          <Link
            key={r}
            href={`/route/${r}`}
            className="w-full flex-1 p-6  flex justify-center items-center gap-2"
          >
            <p
              className={`w-24 text-lg rounded-3xl border-4 flex justify-center outline ${
                colorVariants[r.toLowerCase()]
              }`}
            >
              {r}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
