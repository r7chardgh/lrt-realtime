// "use client";
import { Stop } from "@/app/lib/definition";
import getUrl from "@/app/lib/getUrl";
import { notosans, notoserifhk } from "@/app/ui/font";
import RouteList from "@/route.json";
import Link from "next/link";
// import useSWR from "swr";
export default async function Page({ params }: { params: { code: string } }) {
  // const fetcher = (url: any) => fetch(url).then((r) => r.json());
  // const { data } = useSWR(`/api/route/${params.code}`, fetcher);
  console.log(process.env.NEXT_PUBLIC_URL + `/api/route/${params.code}`);

  const data = await fetch(
    process.env.NEXT_PUBLIC_URL + `/api/route/${params.code}`
  ).then((res) => res.json());

  const stop = RouteList.find((r: Stop) => {
    r.route_code;
    return r.route_code === params.code;
  });
  return (
    <main className="flex flex-col justify-center">
      {!!stop && (
        <div
          className={`${notosans.className} flex gap-2 font-semibold items-center`}
        >
          <div className="flex flex-col leading-none">
            <p className={`${notoserifhk.className} text-lg`}>輕鐵路綫</p>
            <p>LRT Route</p>
          </div>
          <p className="text-lg">{stop.route_code}</p>
        </div>
      )}
      <div className="flex justify-center list-none">
        <li>
          {data
            ? data.map((stop: any, i: number) => {
                return stop[1] === "1" ? (
                  <ul key={i}>
                    <Link
                      href={{
                        pathname: `/station/${stop[3]}`,
                        query: {
                          st_cn: stop[4],
                          st_en: stop[5],
                        },
                      }}
                    >
                      {stop[4]}
                    </Link>
                  </ul>
                ) : null;
              })
            : null}
        </li>
        <li>
          {data
            ? data.map((stop: any, i: number) => {
                return stop[1] === "2" ? (
                  <ul key={i}>
                    <Link
                      href={{
                        pathname: `/station/${stop[3]}`,
                        query: {
                          st_cn: stop[4],
                          st_en: stop[5],
                        },
                      }}
                    >
                      {stop[4]}
                    </Link>
                  </ul>
                ) : null;
              })
            : null}
        </li>
      </div>
    </main>
  );
}
