import flightInterface from "../interfaces/flight";

const currentDate = new Date();

export const flight: flightInterface = {
  originCode: "LAX",
  originLocation: "Los Angeles, USA",
  destinationCode: "NRT",
  destinationLocation: "Tokyo, Japan",
  flightNumber: "480",
  departureTime: new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000),
  arrivalTime: new Date(currentDate.getTime() + 14 * 24 * 60 * 60 * 1000),
  currentDate: new Date(),
  price: 420,
  duration: "2h",
  seatsBusinessClass: [
    true,
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
  ],

  seatsComfort: [
    true,
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
  ],
  seatsOrdinary: [
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    false,
    true,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    true,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    false,
    true,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    true,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    false,
    true,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    true,
  ],
};

export const flight2: flightInterface = {
  originCode: "USA",
  originLocation: "Los Angeles, USA",
  destinationCode: "UKS",
  destinationLocation: "Tokyo, Japan",
  flightNumber: "480",
  departureTime: new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000),
  arrivalTime: new Date(currentDate.getTime() + 14 * 24 * 60 * 60 * 1000),
  currentDate: new Date(),
  price: 420,
  duration: "2h",
  seatsBusinessClass: [
    true,
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
  ],

  seatsComfort: [
    true,
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
  ],
  seatsOrdinary: [
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    false,
    true,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    true,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    false,
    true,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    true,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    false,
    true,
    false,
    false,
    false,
    true,
    true,
    false,
    false,
    true,
  ],
};
