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
      <div className="flex flex-col gap-4 flex-wrap w-full">
        {RouteList.map((r) => (
          <Link
            key={r.route_code}
            href={`/route/${r.route_code}`}
            className="w-full flex-1 p-6  flex justify-center items-center gap-4  font-semibold "
          >
            <p
              className={`w-24 text-lg rounded-3xl border-4 flex justify-center outline ${colorVariants[r.route_code.toLowerCase()]
                } ${notosans.className}`}
            >
              {r.route_code}
            </p>
            <p className={`${notoserifhk.className} text-xl`}>{r.route_cn}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
