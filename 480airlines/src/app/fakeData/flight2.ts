import flight2Interface from "../interfaces/flight2";

const fakeFlight: flight2Interface = {
  flightID: 1,
  departureAirport: "JFK",
  arrivalAirport: "LAX",
  plane: {
    aircraftID: 1,
    name: "Boeing747",
  },
  dateOfArrival: new Date("2023-11-19T19:00:00.000+00:00"),
  dateOfDeparture: new Date("2023-11-19T15:00:00.000+00:00"),
  departureCity: "New York",
  arrivalCity: "Los Angeles",
};
const fakeFlight2: flight2Interface = {
  flightID: 2,
  departureAirport: "LAX",
  arrivalAirport: "JFK",
  plane: {
    aircraftID: 2,
    name: "Boeing727",
  },
  dateOfArrival: new Date("2023-11-21T01:00:00.000+00:00"),
  dateOfDeparture: new Date("2023-11-20T21:00:00.000+00:00"),
  departureCity: "Los Angeles",
  arrivalCity: "New York",
};

export { fakeFlight, fakeFlight2 };
