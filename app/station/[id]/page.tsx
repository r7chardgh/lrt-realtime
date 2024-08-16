import { fetchLrtDataByStationId } from "@/app/lib/data";
import { Platform } from "@/app/lib/definition";
import { notFound } from "next/navigation";
export default async function Page({ params }: { params: { id: number } }) {
  const lrtData = await fetchLrtDataByStationId(params.id);

  if (lrtData.status === 0) {
    notFound();
  }
  return (
    <main>
      {lrtData.status === 1 ? <p>normal</p> : <p>error</p>}
      <p>{lrtData.platform_id}</p>
      <p>{lrtData.system_time}</p>
      <ul>
        {lrtData.platform_list.map((plat: Platform) => {
          return (
            <li key={plat.platform_id}>
              <p>
                <span className=" bg-yellow-400 text-blue-950 rounded-full p-2">
                  {plat.platform_id}
                </span>
                號月台
              </p>
              <ul>
                <li>
                  {plat.route_list?.map((route) => (
                    <ul key={route.route_no} className="flex gap-4">
                      <p>{route.route_no}</p>
                      <div className="flex flex-col gap-1">
                        <p>{route.dest_ch}</p>
                        <p>{route.dest_en}</p>
                      </div>
                      <div className="flex gap-1">
                        <p>{route.time_en}</p>
                        <p>{route.time_ch}</p>
                      </div>
                      <p>{route.train_length}卡</p>
                      <p>
                        {route.arrival_departure === "D" ? "出發" : "抵站"}時間
                      </p>
                      <p>{route.stop}</p>
                    </ul>
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
