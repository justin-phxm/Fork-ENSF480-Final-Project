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
export { fakeFlight };
