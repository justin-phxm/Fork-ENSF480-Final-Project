export default interface flightInterface {
  destinationCode: string;
  destinationLocation: string;
  originCode: string;
  originLocation: string;
  flightNumber: string;
  departureTime: Date;
  arrivalTime: Date;
  currentDate?: Date;
  price: number;
  duration: string;
  seatsBusinessClass: string[];
  seatsComfort: string[];
  seatsOrdinary: string[];
}
