import { fetchLrtDataByStationId } from "./lib/data";
import Link from "next/link";
import RouteList from "@/route.json";
import { notosans, notoserifhk } from "@/app/ui/font";
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
      <div className="flex gap-4 flex-wrap justify-center">
        {RouteList.map((r) => (
          <Link
            key={r.route_code}
            href={`/route/${r.route_code}`}
            className="w-full lg:basis-1/3 p-6  flex items-center gap-4  font-semibold hover:bg-gray-100 justify-start"
          >
            <p
              className={`min-w-16 border-4 rounded-2xl text-sm sm:min-w-24 sm:text-lg sm:rounded-3xl sm:border-8 flex justify-center outline outline-4 ${colorVariants[r.route_code.toLowerCase()]
                } ${notosans.className}`}
            >
              {r.route_code}
            </p>
            <div className="flex flex-col w-auto">
              <p className={`${notoserifhk.className} sm:text-xl`}>{r.route_cn}</p>
              <p className={`${notosans.className} sm:text-xl`}>{r.route_en}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
