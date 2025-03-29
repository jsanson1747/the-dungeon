import { getUserCharacters } from "@/db/queries";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: { userId: number } }
) {
  const userId = params.userId;

  const { data, error } = await getUserCharacters(userId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: error.code });
  }

  return NextResponse.json({ data });
}
