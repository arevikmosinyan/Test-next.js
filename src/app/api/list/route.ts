import { NextResponse, NextRequest } from "next/server";
import fetchAllCryptosListings from "../../../request/index";

export async function GET(request: NextRequest) {
  const resOfAllListings = await fetchAllCryptosListings({});

  return NextResponse.json({
    data: resOfAllListings.data,
  });
}
