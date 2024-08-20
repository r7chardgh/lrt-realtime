import { getStationJsonByPapa } from "@/app/lib/data";
export const dynamic = "force-static";

export async function GET(
  req: Request,
  { params }: { params: { code: string } }
) {
  const data = await getStationJsonByPapa();
  return Response.json(data.filter((route: any[]) => route[0] === params.code));
}
