import { getStationJsonByPapa } from "@/app/lib/data";
export const dynamic = "force-static";

export async function GET() {
  const data = await getStationJsonByPapa();
  return Response.json(data);
}
