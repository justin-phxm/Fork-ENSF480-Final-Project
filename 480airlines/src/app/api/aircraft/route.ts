import { NextResponse } from "next/server";

const uri = "http://localhost:8080/aircrafts/";

export async function GET(req: Request) {
  const response = await fetch("http://localhost:8080/aircrafts/getAircrafts");
  return response;
}

export async function POST(req: Request) {
  const body = await req.json();
  // console.log(body);
  const response = await fetch(uri + "addAircraft", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    return NextResponse.error();
  }
  return response;
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
  // console.log(responseText);
  return NextResponse.json(
    { message: responseText }
    // { status: 200 }
  );
}
