import { NextResponse } from "next/server";

// 访问 /users 会访问到 api （类似后端）
export function GET() {
  return NextResponse.json({
    message: "hello",
  });
}
