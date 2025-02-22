import { NextRequest, NextResponse } from "next/server";
import * as argon2 from "argon2";
import * as crypto from "crypto";
import { InsertUser } from "@/db/schema";
import { createUser } from "@/db/queries";

export async function POST(request: NextRequest) {
  const requestData: InsertUser = await request.json();

  let salt: Buffer;
  try {
    salt = crypto.randomBytes(1024);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({
        success: false,
        message: error.message,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "An error occured when generating random bytes",
      });
    }
  }

  const saltedPassword = requestData.password + salt.toString("hex");

  requestData.password = await argon2.hash(saltedPassword);
  requestData.sodiumChloride = salt.toString("hex");

  const { data, error } = await createUser(requestData);

  console.log(data);

  if (error) {
    return NextResponse.json(
      {
        success: false,
        message: `${error.detail} -- ${error.message}`,
      },
      { status: 409 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "User Created Successfully",
  });
}
