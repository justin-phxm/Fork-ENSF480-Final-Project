import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const response = await fetch("http://localhost:8080/customer/getCustomer");
  return response;
}

export async function POST(req: Request) {
  return NextResponse.json({ message: "Hello from Next.js!" });
}

export async function DELETE(req: Request) {
  const body = await req.json();
  console.log(body);
  const uri =
    "http://localhost:8080/customer/deleteCustomer/" + body.customerID;

  const response = await fetch(uri, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const responseText = await response.text();
  // console.log(responseText);
  return NextResponse.json(
    { message: responseText }
    // { status: 200 }
  );
}
