// "use client";
import { Stop } from "@/app/lib/definition";
import getUrl from "@/app/lib/getUrl";
import parseRoute from "@/app/lib/parseRoute";
import { notosans, notoserifhk } from "@/app/ui/font";
import RouteList from "@/route.json";
import Link from "next/link";
import { notFound } from "next/navigation";
// import useSWR from "swr";
export default async function Page({ params }: { params: { code: string } }) {
  const colorVariants: any = {
    505: "border-c_505",
    507: "border-c_507",
    610: "border-c_610",
    614: "border-c_614",
    "614P": "border-c_614p",
    615: "border-c_615",
    "615P": "border-c_615p",
    705: "border-c_705",
    706: "border-c_706",
    751: "border-c_751",
    "761P": "border-c_761p",
    "505bg": "bg-c_505",
    "507bg": "bg-c_507",
    "610bg": "bg-c_610",
    "614bg": "bg-c_614",
    "614Pbg": "bg-c_614p",
    "615bg": "bg-c_615",
    "615Pbg": "bg-c_615p",
    "705bg": "bg-c_705",
    "706bg": "bg-c_706",
    "751bg": "bg-c_751",
    "761Pbg": "bg-c_761p",
  };
  // const fetcher = (url: any) => fetch(url).then((r) => r.json());
  // const { data } = useSWR(`/api/route/${params.code}`, fetcher);
  // console.log(getUrl(`/api/route/${params.code}`));

  const data = await fetch(getUrl(`/api/route/${params.code}`))
    .then((res) => res.json())
    .then((d) =>
      params.code === "705" || params.code === "706" ? d : parseRoute(d)
    );

  //console.log(data);

  const stop = RouteList.find((r: Stop) => {
    r.route_code;
    return r.route_code === params.code;
  });

  if (!stop) {
    notFound();
  }
  return (
    <main className="flex flex-col justify-center p-6">
      <div
        className={`flex justify-between ${notosans.className} text-sm sm:text-lg font-semibold`}
      >
        {!!stop && (
          <div className={`${notosans.className} flex gap-2 items-center`}>
            <div className="flex flex-col leading-none">
              <p className={`${notoserifhk.className} sm:text-lg`}>輕鐵路綫</p>
              <p>LRT Route</p>
            </div>
            <div
              className={`text-sm min-w-16 border-4 rounded-2xl sm:min-w-24 sm:text-lg sm:rounded-3xl sm:border-8 flex justify-center outline outline-4  ${
                colorVariants[params.code]
              }`}
            >
              {stop.route_code}
            </div>
          </div>
        )}
        <Link
          href="/"
          className={`p-3 border-4 rounded-2xl font-semibold hover:border-black`}
        >
          <p className={`${notoserifhk.className} sm:text-lg`}>返回</p>
          <p>Back</p>
        </Link>
      </div>
      <div className="flex justify-center list-none sm:gap-12">
        {data ? (
          params.code === "705" || params.code === "706" ? (
            <li>
              {data.map((stop: any, i: number) => {
                if (!!data[i + 1] && data[i][5] === data[i + 1][5]) {
                  return null;
                }
                return (
                  <ul
                    className={`relative  flex justify-center items-center hover:bg-gray-50 font-semibold `}
                    key={stop[4]}
                  >
                    <span
                      className={`absolute -left-1.5 h-full w-3 ${
                        colorVariants[params.code + "bg"]
                      }`}
                    ></span>
                    <span
                      className={`absolute -left-3 w-6 h-6 bg-white rounded-full border-4 border-black  z-10`}
                    ></span>
                    <Link
                      className="p-4 text-lg text-center w-full"
                      href={{
                        pathname: `/station/${stop[3]}`,
                        query: {
                          st_cn: stop[4],
                          st_en: stop[5],
                          code: params.code,
                        },
                      }}
                    >
                      <p
                        className={`font-semibold text-sm ${notoserifhk.className} sm:text-xl`}
                      >
                        {stop[4]}
                      </p>
                      <p className="text-sm">{stop[5]}</p>
                    </Link>
                  </ul>
                );
              })}
            </li>
          ) : (
            data.map((line: any, j: number) => {
              return line.length > 0 ? (
                <li key={j} className="flex-1">
                  <h2 className="sm:text-2xl font-semibold">
                    <p className={`${notoserifhk.className}`}>
                      往{line[line.length - 1][4]}
                    </p>
                    <p className={`${notosans.className} sm:text-lg`}>
                      To {line[line.length - 1][5]}
                    </p>
                  </h2>
                  {line.map((stop: any, i: number) => {
                    if (!!line[i + 1] && line[i][5] === line[i + 1][5]) {
                      return null;
                    }
                    return (
                      <ul
                        className={`relative  flex justify-center items-center hover:bg-gray-50 font-semibold `}
                        key={stop[4]}
                      >
                        <span
                          className={`absolute -left-1.5 h-full w-3 ${
                            colorVariants[params.code + "bg"]
                          }`}
                        ></span>
                        <span
                          className={`absolute -left-3 w-6 h-6 bg-white rounded-full border-4 border-black  z-10`}
                        ></span>
                        <Link
                          className="p-4 text-lg text-center w-full"
                          href={{
                            pathname: `/station/${stop[3]}`,
                            query: {
                              st_cn: stop[4],
                              st_en: stop[5],
                              code: params.code,
                            },
                          }}
                        >
                          <p
                            className={`font-semibold text-sm ${notoserifhk.className} sm:text-xl`}
                          >
                            {stop[4]}
                          </p>
                          <p className="text-sm">{stop[5]}</p>
                        </Link>
                      </ul>
                    );
                  })}
                </li>
              ) : null;
            })
          )
        ) : null}
      </div>
    </main>
  );
}
