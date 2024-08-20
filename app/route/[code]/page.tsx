"use client";
import Link from "next/link";
import useSWR from "swr";
export default function Page({ params }: { params: { code: string } }) {
  const fetcher = (url: any) => fetch(url).then((r) => r.json());
  console.log(params.code);
  const { data } = useSWR(`/api/route/${params.code}`, fetcher);

  return (
    <main>
      <h1>ROUTE {params.code}</h1>
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
