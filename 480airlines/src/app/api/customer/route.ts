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
  const responseBody = await response.body?.getReader().read();
  console.log(responseBody);
  return response;
}

export async function POST(req: Request) {
  const body = await req.json();
  // console.log(body);
  const response = await fetch(`${uri}/addCustomer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return NextResponse.json({ message: "success" });
}
export async function PUT(req: Request) {
  const body = await req.json();
  console.log(body);

  const formData = new FormData();
  formData.append("newStatus", body.newStatus);
  const response = await fetch(`${uri}/updateMemberStatus/${body.customerID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: formData,
  });
  return NextResponse.json({ message: "success", response: response });
}
export async function DELETE(req: Request) {
  const body = await req.json();
  console.log(body);
  const uri =
    "http://localhost:8080/Customer/deleteCustomer/" + body.customerID;

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
