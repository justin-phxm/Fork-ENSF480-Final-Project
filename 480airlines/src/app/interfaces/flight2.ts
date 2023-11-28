import aircraft2Interface from "./aircraft2";
export default interface flight2Interface {
  flightID: number;
  departureAirport: string;
  arrivalAirport: string;
  plane: aircraft2Interface;
  dateOfArrival: Date;
  dateOfDeparture: Date;
  departureCity: string;
  arrivalCity: string;
}
