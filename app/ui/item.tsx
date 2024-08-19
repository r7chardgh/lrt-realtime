import Image from "next/image";
import { Route } from "../lib/definition";
import { notoserifhk } from "./font";

export const DashBoardListItem = ({ Route }: { Route: Route }) => {
  //data:  route_no; dest_ch,dest_en; train_length; time_ch en;

  return (
    <ul className="p-3 flex sm:gap-6 gap-0 sm:text-2xl justify-center items-center text-blue-950  even:bg-white bg-gray-200">
      {Route.stop === 1 ? (
        <div className="p-4 h-0 bg-red-600 relative flex justify-center items-center rounded-full mr-2 sm:mr-0">
          {/* <p className=" absolute text-white">x</p> */}
        </div>
      ) : null}
      <div className=" font-bold flex-1 ">{Route.route_no}</div>
      <div className="flex flex-col leading-none font-semibold flex-1 grow-[2] ">
        <p className={`  ${notoserifhk.className}`}>{Route.dest_ch}</p>
        <p className="text-sm">{Route.dest_en}</p>
      </div>
      {Route.train_length ? (
        <div className="flex-1 flex gap-1 overflow-hidden">
          {Route.train_length >= 1 ? (
            <Image
              width={50}
              height={10}
              src="/lrt-cartoon.png"
              alt="train icon reveals train length"
            />
          ) : null}
          {Route.train_length === 2 ? (
            <Image
              width={50}
              height={10}
              src="/lrt-cartoon.png"
              alt="train icon reveals train length"
            />
          ) : null}
        </div>
      ) : null}
      {Route.time_en && Route.time_ch ? (
        <div className=" flex gap-1 items-center flex-1 justify-end">
          {Route.time_en === "-" ? (
            <div className="flex flex-col font-semibold items-end leading-none">
              <p className={` ${notoserifhk.className} sm:text-xl`}>已到站</p>
              <p className="text-sm">Arrived</p>
            </div>
          ) : Route.time_en === "Arriving" ? (
            <div className="flex flex-col font-semibold items-end leading-none">
              <p
                className={`font-semibold ${notoserifhk.className} sm:text-xl`}
              >
                即將抵達
              </p>
              <p className="text-sm">Arriving</p>
            </div>
          ) : Route.time_en === "Departing" ? (
            <div className="flex flex-col font-semibold items-end leading-none">
              <p
                className={`font-semibold ${notoserifhk.className} sm:text-xl`}
              >
                正在離開
              </p>
              <p className="text-sm">Departing</p>
            </div>
          ) : (
            <>
              <p className={`font-bold`}>{Route.time_ch.match(/(\d+)/)?.[0]}</p>
              <div className="flex flex-col leading-none text-sm font-semibold">
                <p className={`${notoserifhk.className}`}>分鐘</p>
                <p>min</p>
              </div>
            </>
          )}
        </div>
      ) : null}
    </ul>
  );
};
