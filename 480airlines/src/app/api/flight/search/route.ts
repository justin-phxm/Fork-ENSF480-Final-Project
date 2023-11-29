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

  let origin = urlQuery.get("origin") ?? "null";
  if (!origin) {
    origin = "null";
  }
  let destination = urlQuery.get("destination");
  if (!destination) {
    destination = "null";
  }

  let depart = urlQuery.get("depart");
  if (!depart) {
    depart = "null";
  }

  console.log(
    `Origin: ${origin}, Destination: ${destination}, Depart: ${depart}`
  );

  let response = await getFlightsArrivalAirportCode(origin);
  console.log(response);
  if (response.length === 0) {
    response = await getFlightsArrivalCity(origin);
    console.log(response);
  }
  let response2 = await getFlightsDestinationAirportCode(destination);
  console.log(response2);
  if (response2.length === 0) {
    response2 = await getFlightsDestinationCity(destination);
    console.log(response2);
  }
  const response3 = await getFlightByDepartureDate(depart);
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
