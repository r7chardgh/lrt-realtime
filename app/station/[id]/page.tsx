import { fetchLrtDataByStationId } from "@/app/lib/data";
import { notFound } from 'next/navigation'
export default async function Page({ params }: { params: { id: number } }) {
    const lrtData = await fetchLrtDataByStationId(params.id);
    
if(lrtData.status===0){
    notFound();
}
    return (
    <main >
      {lrtData.status === 1 ? <p>normal</p> : <p>error</p>}
      <p>{lrtData.platform_id}</p>
      <p>
        {lrtData.system_time}
      </p>
      <ul>

        {lrtData.platform_list.map((plat: any) => {
          return <li>
            <ul>

              {plat.route_list[0].route_no}
            </ul>
          </li>
        })}
      </ul>
    </main>
  );
}