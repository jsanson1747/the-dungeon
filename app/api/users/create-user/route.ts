import supabase from "@/supabase/client";
import { NextRequest, NextResponse } from "next/server";
import * as argon2 from "argon2";

export async function POST(request: NextRequest) {
  const requestData = await request.json();
  requestData.password = await argon2.hash(requestData.password);
  const { data, error } = await supabase.from("users").insert(requestData);
  console.log(data);
  console.log(error);

  if (error) {
    return NextResponse.json(
      {
        success: false,
        message: `${error.details} -- ${error.message}`,
      },
      { status: 409 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "User Created Successfully",
  });
}
