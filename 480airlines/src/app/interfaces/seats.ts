export default interface seatsInterface {
  seatsID: number;
  availability: boolean;
  seatType: "Ordinary" | "Comfort" | "Business";
  seatCode: string;
}
