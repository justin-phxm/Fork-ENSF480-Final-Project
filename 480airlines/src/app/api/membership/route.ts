import { NextResponse } from "next/server";

const uri = "http://localhost:8080/Customer";
export async function GET(req: Request) {
  const url = new URL(req.url);
  const urlQuery = url.searchParams;
  let email = urlQuery.get("email");
  if (!email) {
    email = "null";
  }
  const serverURI = `${uri}/view/${email}`;
  const response = await fetch(serverURI, {
    method: "GET",
  });
  return response;
}

export async function POST(req: Request) {
  return NextResponse.json({ message: "Hello from Next.js!" });
}

export async function DELETE(req: Request) {
  const body = await req.json();
  console.log(body);
  const uri =
    "http://localhost:8080/membership/removeMembership/" + body.membershipID;

  const response = await fetch(uri, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const responseText = await response.text();
  return NextResponse.json({ message: responseText });
}
