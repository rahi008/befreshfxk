// pages/api/visitorCount.ts
import {
  getTotalVisitorCount,
  incrementvisitor_count,
} from "@/app/utils/visitorCounter";
import { NextResponse } from "next/server";
export const revalidate = 0;
export async function GET() {
  try {
    const visitorCount = await incrementvisitor_count();
    const totalCount = await getTotalVisitorCount();
    return NextResponse.json(
      { count: visitorCount.cnt, totalCount: totalCount },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
