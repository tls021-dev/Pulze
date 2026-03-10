import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Placeholder data for immediate use
  return NextResponse.json([
    { symbol: "NVDA", price: 870 },
    { symbol: "TSLA", price: 208 },
    { symbol: "AAPL", price: 192 }
  ]);
}
