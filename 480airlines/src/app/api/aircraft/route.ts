import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const response = await fetch("http://localhost:8080/aircrafts/getAircrafts");
  return response;
}

export async function POST(req: Request) {
  return NextResponse.json({ message: "Hello from Next.js!" });
}

export async function DELETE(req: Request) {
  const body = await req.json();
  console.log(body);
  const uri =
    "http://localhost:8080/aircrafts/deleteAircraft/" + body.aircraftID;

  const response = await fetch(uri, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const responseText = await response.text();
  console.log(responseText);

  //   const responseData = await response.json();
  //   console.log(responseData);

  return response;
}
