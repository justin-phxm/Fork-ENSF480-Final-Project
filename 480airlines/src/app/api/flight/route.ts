import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const response = await fetch("http://localhost:8080/flights/getFlights");
  if (!response.ok) {
    return NextResponse.error();
  }
  return response;
}

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  const response = await fetch("http://localhost:8080/flights/addFlight", {
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

export async function PUT(req: Request) {
  const body = await req.json();
  console.log(body);
  const response = await fetch("http://localhost:8080/flights/updateFlight", {
    method: "PUT",
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
  const uri = "http://localhost:8080/flights/deleteFlight/" + body.flightID;

  const response = await fetch(uri, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const responseText = await response.text();
  if (!response.ok) {
    return NextResponse.error();
  }
  return NextResponse.json({ message: responseText });
}
