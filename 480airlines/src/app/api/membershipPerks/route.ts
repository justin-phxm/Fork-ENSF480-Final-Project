import { NextResponse } from "next/server";
import { API_URL } from "../apiInfo";

const uri = `${API_URL}/Customer`;

export async function PUT(req: Request) {
  const url = new URL(req.url);
  const urlQuery = url.searchParams;

  let companionTicket = urlQuery.get("companionTicket");
  if (!companionTicket) {
    companionTicket = "null";
  }
  let monthlyEmail = urlQuery.get("monthlyEmails");
  if (!monthlyEmail) {
    monthlyEmail = "null";
  }
  let loungeDiscount = urlQuery.get("loungeDiscount");
  if (!loungeDiscount) {
    loungeDiscount = "null";
  }

  const body = await req.json();
  console.log(body);

  let response1 = null;
  let response2 = null;
  let response3 = null;
  let response4 = null;
  const formData = new FormData();
  if (companionTicket !== "null") {
    formData.append("companionTicket", companionTicket);
    const serverURI1 = `${uri}/updateCompanionTicket/${body.email}`;
    console.log(serverURI1);
    response1 = await fetch(serverURI1, {
      method: "PUT",
      body: formData,
    });
  }
  if (monthlyEmail !== "null") {
    formData.append("monthlyEmails", monthlyEmail);
    const serverURI2 = `${uri}/updateMonthlyEmails/${body.email}`;
    console.log(serverURI2);
    console.log(formData);
    response2 = await fetch(serverURI2, {
      method: "PUT",
      body: formData,
    });
  }
  if (loungeDiscount !== "null") {
    formData.append("loungeDiscount", loungeDiscount);
    const serverURI3 = `${uri}/updateLoungeDiscount/${body.email}`;
    console.log(serverURI3);
    response3 = await fetch(serverURI3, {
      method: "PUT",
      body: formData,
    });
  }
  if (body.getCreditCard && body.getCreditCard === "true") {
    const serverURI4 = `${uri}/updateCreditCard/${body.email}`;
    console.log(serverURI4);
    response4 = await fetch(serverURI4, {
      method: "PUT",
    });
  }

  const responseText1 = await response1?.text();
  const responseText2 = await response2?.text();
  const responseText3 = await response3?.text();
  const responseText4 = await response4?.text();
  console.log(responseText1);
  console.log(responseText2);
  console.log(responseText3);
  console.log(responseText4);
  const responseText = `${responseText1 ?? ""}${responseText2 ?? ""}${
    responseText3 ?? ""
  } ${responseText4 ?? ""}`;
  console.log(responseText);

  return NextResponse.json({ message: responseText });
}
