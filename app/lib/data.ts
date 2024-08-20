import Papa from "papaparse";
export async function fetchLrtDataByStationId(sid: number) {
  const data = await fetch(
    `
        https://rt.data.gov.hk/v1/transport/mtr/lrt/getSchedule?station_id=${sid}`,
    { cache: "no-store" }
  );

  return data.status == 200 ? data.json() : data.status;
}

export async function getStationJsonByPapa() {
  const lrtStationCSV = await fetch(
    "https://opendata.mtr.com.hk/data/light_rail_routes_and_stops.csv"
  ).then((res) => res.text());

  return Papa.parse(lrtStationCSV).data;
}
