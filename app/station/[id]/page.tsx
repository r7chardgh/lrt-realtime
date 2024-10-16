"use client";
import { DashBoardListItem } from "@/app/ui/item";
import { fetchLrtDataByStationId } from "@/app/lib/data";
import { Platform, Station } from "@/app/lib/definition";
import { notosans, notoserifhk } from "@/app/ui/font";
import { notFound, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useCycle } from "framer-motion";

export const runtime = "edge";
export default function Page({ params }: { params: { id: number } }) {
  const searchParams = useSearchParams();
  const [lrtData, setLrtData] = useState<Station | null>(null);
  const [refreshToken, setRefreshToken] = useState(Math.random());
  const station_cn = searchParams.get("st_cn");
  const station_en = searchParams.get("st_en");
  const code = searchParams.get("code");

  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    fetchLrtDataByStationId(params.id)
      .then(setLrtData)
      .finally(() => {
        // Update refreshToken after 3 seconds so this event will re-trigger and update the data
        setTimeout(() => setRefreshToken(Math.random()), 10000);
      });
  }, [refreshToken]);

  if (lrtData === null) return <></>;
  if (lrtData.status === 0) {
    notFound();
  }

  //framer motion variants

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
  return (
    <main className={` ${notosans.className} bg-blue-950 text-white`}>
      <div className="flex justify-between p-3">
        <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
          <div className=" flex gap-3">
            <button
              className={`${
                isOpen ? "border-lrt_yellow text-lrt_yellow" : null
              } border-4 rounded-full w-3 h-3 p-3 flex justify-center items-center hover:border-lrt_yellow hover:text-lrt_yellow`}
              onClick={() => toggleOpen()}
            >
              !
            </button>
            <motion.div variants={variants}>
              <div className="flex gap-3">
                <div className={`${notosans.className}`}>
                  {lrtData.status === 1 ? (
                    <>
                      <p className={`${notoserifhk.className}`}>系統正常</p>
                      <p>system normal</p>
                    </>
                  ) : (
                    <p>error</p>
                  )}
                </div>
                <p>{lrtData.system_time.split(" ")[0]}</p>
              </div>
            </motion.div>
          </div>
        </motion.nav>

        <Link
          href={`/route/${code}`}
          className="p-3 border-4 rounded-2xl font-semibold hover:border-lrt_yellow hover:text-lrt_yellow"
        >
          <p className={`${notoserifhk.className} sm:text-lg`}>返回</p>
          <p>Back</p>
        </Link>
      </div>

      <ul>
        {lrtData.platform_list.map((plat) => {
          return (
            <li key={plat.platform_id}>
              <ul className="flex justify-between items-center p-3">
                <div className="flex gap-2 items-center">
                  <div className="h-0 p-4 bg-lrt_yellow text-blue-950 relative flex justify-center items-center rounded-full">
                    <p className=" absolute text-xl font-bold">
                      {plat.platform_id}
                    </p>
                  </div>
                  <div className="flex flex-col leading-none font-semibold">
                    <p className={`${notoserifhk.className} sm:text-lg`}>
                      月台
                    </p>
                    <p>Platform</p>
                  </div>
                </div>
                <div className="flex flex-col leading-none font-semibold items-center">
                  <p className={`${notoserifhk.className} text-lg sm:text-2xl`}>
                    {station_cn}
                  </p>
                  <p>{station_en}</p>
                </div>
                <p className=" text-lg font-semibold">
                  {lrtData.system_time.split(" ")[1]}
                </p>
              </ul>
              <ul>
                <li>
                  <ul className="px-3 py-2 flex sm:gap-6 gap-0 bg-gray-300 text-blue-950 font-semibold justify-center">
                    <div className=" flex-1 flex flex-col leading-none">
                      <p className={`${notoserifhk.className} sm:text-lg`}>
                        路綫
                      </p>
                      <p>Route</p>
                    </div>
                    <div className=" flex-1 grow-[2]  flex flex-col leading-none">
                      <p className={`${notoserifhk.className} sm:text-lg`}>
                        目的地
                      </p>
                      <p>Destination</p>
                    </div>
                    <div className=" flex-1"></div>
                    <div className=" flex-1 items-end  flex flex-col leading-none">
                      <p className={`${notoserifhk.className} sm:text-lg`}>
                        下班車
                      </p>
                      <p className=" text-right">Next Train</p>
                    </div>
                  </ul>
                  {plat.end_service_status && (
                    <div className="flex flex-col bg-white text-blue-950 p-3">
                      <p>服務已經結束</p>
                      <p>service is ended</p>
                    </div>
                  )}
                  {plat.route_list?.map((route, i) => (
                    <DashBoardListItem
                      Route={route}
                      key={route.route_no + i}
                      highlight={code}
                    />
                  ))}
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
