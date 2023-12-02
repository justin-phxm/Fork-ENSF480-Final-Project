import { NextResponse } from "next/server";

import { API_URL } from "../apiInfo";

const uri = API_URL + "/Employee";

export async function GET(req: Request) {
  const serverURI = `${uri}/getEmployees`;
  console.log(serverURI);
  const response = await fetch(serverURI);
  if (!response.ok) {
    return NextResponse.error();
  }
  return response;
}

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  const serverURI = `${uri}/addEmployee`;
  console.log(serverURI);
  const response = await fetch(serverURI, {
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

  const serverURI = `${uri}/removeEmployee/${body.id}`;
  console.log(serverURI);

  const response = await fetch(serverURI, {
    method: "DELETE",
  });

  const responseText = await response.text();
  console.log(responseText);

  if (!response.ok) {
    return NextResponse.error();
  }
  return NextResponse.json({ message: responseText });
}
