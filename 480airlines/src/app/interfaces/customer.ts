export default interface CustomerInterface {
  customerID: number;
  firstName: string;
  lastName: string;
  email: string;
  isMember: boolean;
  creditCardNum?: number;
  companionTicket: boolean;
  monthlyEmails: boolean;
  loungeDiscount: boolean;
  address?: string;
  onflight: number;
  membershipStatus?: boolean;
}
