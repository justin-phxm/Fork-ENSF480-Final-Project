export default interface flightInterface {
  destinationCode: string;
  destinationLocation: string;
  originCode: string;
  originLocation: string;
  flightNumber: string;
  departureTime: Date;
  arrivalTime: Date;
  price: number;
  seatsBusinessClass: boolean[];
  seatsComfort: boolean[];
  seatsOrdinary: boolean[];
}
