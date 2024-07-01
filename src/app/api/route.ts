import { NextResponse, NextRequest } from "next/server";
import fetchCryptosListingsLatest from "../../request/index";

export async function GET(request: NextRequest, context: any) {
  const { searchParams } = request.nextUrl;
  const start = searchParams.get("start") as string;
  const limit = searchParams.get("limit") as string;
  const sort = searchParams.get("sort") as string;
  const resOfAllListings = await fetchCryptosListingsLatest({});

  const resOfListingsLatest = await fetchCryptosListingsLatest({
    start,
    limit,
    sort,
  });

  return NextResponse.json({
    data: resOfListingsLatest.data,
  });
}
