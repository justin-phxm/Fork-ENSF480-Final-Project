export default interface orderTransactionInterface {
  iD: number;
  email: string;
  flightID: number;
  seatCode: string;
  plane: number;
  price: number;
  ticket: {
    seatNumber: string;
    destination: string;
    origin: string;
    planeID: number;
  };
}
