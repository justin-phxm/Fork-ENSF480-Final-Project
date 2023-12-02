import { NextResponse } from "next/server";

import { API_URL } from "../apiInfo";

const uri = API_URL;
// + "/Employee";

export async function POST(req: Request) {
  console.log("getPassengers");
  const body = await req.json();
  const serverURI = `${uri}/Customer/getPassengers/${body.flightID}`;
  console.log(serverURI);
  const response = await fetch(serverURI);
  if (!response.ok) {
    return NextResponse.error();
  }
  return response;
}

// export async function POST(req: Request) {
//   return NextResponse.json({ message: "Hello from Next.js!" });
// }

// export async function DELETE(req: Request) {
//   const body = await req.json();
//   console.log(body);
//   const uri =
//     "http://localhost:8080/employee/deleteEmployee/" + body.employeeID;

//   const response = await fetch(uri, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });
//   const responseText = await response.text();
//   // console.log(responseText);
//   if (!response.ok) {
//     return NextResponse.error();
//   }
//   return NextResponse.json({ message: responseText });
// }
