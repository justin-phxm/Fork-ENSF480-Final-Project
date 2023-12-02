import { NextResponse } from "next/server";

import { API_URL } from "../apiInfo";
const uri = `${API_URL}/Customer`;

export async function GET(req: Request) {
  const serverURI = `${uri}/getCustomers`;
  try {
    const response = await fetch(serverURI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    return NextResponse.json(
      { message: "success", response: data },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "fail", response: "" },
      { status: 500 }
    );
  }
}
