import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  // Assumed email is received and stored for scheduled newsletter
  console.log('Email:', email);

  return NextResponse.json({ message: 'Ok' });
}
