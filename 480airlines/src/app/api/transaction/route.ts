import { NextResponse } from "next/server";

const uri = "http://localhost:8080/transactions";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const urlQuery = url.searchParams;

  let email = urlQuery.get("email");

  if (!email) {
    return NextResponse.error();
  }

  const serverURI = uri + `/getTransactionsByE/${email}`;
  console.log(serverURI);
  const response = await fetch(serverURI, {
    method: "GET",
  });
  if (!response.ok) {
    return NextResponse.error();
  }
  return response;
}

export async function POST(req: Request) {
  const body = await req.json();
  // console.log(body);
  const serverBody = {
    email: body.customerID,
    flightID: body.flightID,
    seatCode: body.seatCode,
    plane: body.plane,
  };

  // console.log(JSON.stringify(serverBody));

  let parseSeatType = 1;

  if (body.seatType === "Comfort") {
    parseSeatType = 2;
  }

  if (body.seatType === "Business") {
    parseSeatType = 3;
  }

  const serverURI =
    uri +
    `/addTransaction/${body.aircraftID}/${body.insurance}/${parseSeatType}`;

  // console.log(serverURI);

  const response = await fetch(serverURI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(serverBody),
  });
  const responseText = await response.text();
  // console.log(responseText);
  if (!response.ok) {
    return NextResponse.error();
  }
  return NextResponse.json({ message: responseText });
}

export async function DELETE(req: Request) {
  const body = await req.json();
  console.log(body);

  const response = await fetch(uri + "/cancelTicket/" + body.transactionID, {
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
