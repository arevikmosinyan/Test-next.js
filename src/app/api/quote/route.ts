import { fetchCryptosQuotesLatestv2 } from "@/request";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, context: any) {
  const name = request.nextUrl.searchParams.get("symbol") as string;

  const resOfListingsLatest = await fetchCryptosQuotesLatestv2({
    symbol: name,
  });

  return NextResponse.json({
    data: resOfListingsLatest.data,
  });
}
