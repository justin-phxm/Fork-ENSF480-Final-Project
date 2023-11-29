import { NextResponse } from "next/server";
const uri = "http://localhost:8080/flights";

const getFlightsArrivalCity = async (originCity: string) => {
  const response = await fetch(`${uri}/getFlightArrive/${originCity}`, {
    method: "GET",
  });
  return response.json();
};

const getFlightsDestinationCity = async (destinationCity: string) => {
  const response = await fetch(`${uri}/getFlightDest/${destinationCity}`, {
    method: "GET",
  });
  return response.json();
};

const getFlightsArrivalAirportCode = async (origin: string) => {
  const response = await fetch(`${uri}/getFlightArriveCode/${origin}`, {
    method: "GET",
  });
  return response.json();
};

const getFlightsDestinationAirportCode = async (destination: string) => {
  const response = await fetch(`${uri}/getFlightDestCode/${destination}`, {
    method: "GET",
  });
  return response.json();
};
const getFlightByDepartureDate = async (depart: string) => {
  const response = await fetch(`${uri}/getFlightByDep/${depart}`, {
    method: "GET",
  });
  return response.json();
};

export async function GET(req: Request) {
  const url = new URL(req.url);
  const urlQuery = url.searchParams;
  // console.log(urlQuery);

  const origin = urlQuery.get("origin") ?? "null";
  const destination = urlQuery.get("destination") ?? "null";
  const depart = urlQuery.get("depart") ?? "null";

  console.log(
    `Origin: ${origin}, Destination: ${destination}, Depart: ${depart}`
  );

  const response = await getFlightsArrivalAirportCode(origin || "");
  console.log(response);
  const response2 = await getFlightsDestinationAirportCode(destination || "");
  console.log(response2);
  const response3 = await getFlightByDepartureDate(depart || "");
  console.log(response3);

  return NextResponse.json({
    flightsArrivalAirport: response,
    flightsDestinationAirport: response2,
    flightsDepartureDate: response3,
  });
}

export async function POST(req: Request) {
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
