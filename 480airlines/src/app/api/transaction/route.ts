import { NextResponse } from "next/server";

const uri = "http://localhost:8080/transactions";

export async function GET(req: Request) {
  const response = await fetch(uri + "/getTransactions");
  if (!response.ok) {
    return NextResponse.error();
  }
  return response;
}

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  const response = await fetch(
    uri +
      `/addTransaction/${body.aircraftID}/${body.insurance}/${body.seatType}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  if (!response.ok) {
    return NextResponse.error();
  }
  return response;
}

export async function DELETE(req: Request) {
  const body = await req.json();
  console.log(body);

  const response = await fetch(
    uri + "/deleteTransaction/" + body.transactionID,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const responseText = await response.text();
  if (!response.ok) {
    return NextResponse.error();
  }
  return NextResponse.json({ message: responseText });
}
