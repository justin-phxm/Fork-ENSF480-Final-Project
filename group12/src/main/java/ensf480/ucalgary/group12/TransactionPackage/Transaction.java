package ensf480.ucalgary.group12.TransactionPackage;

import jakarta.persistence.*;
import java.util.List;

import ensf480.ucalgary.group12.TransactionPackage.Ticket;


@Entity
@Table(name = "Transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int iD;
    @Column(name = "CustomerID")
    private int customerID;
    @Column(name = "FlightID")
    private int flightID;
    @Column(name = "SeatCode")
    private String seatCode;
    @Transient
    private double price;

    public Transaction(){

    }
    
    public String printReciept(){ 
        // system.out.print for now can change if needed
        // String ret = "Successfully purchased Ticket to " + transactionTicket.getDestination() + 
        // "from " + transactionTicket.getOrigin() + "seat Number " + transactionTicket.getSeatNumber() 
        // + "on flight number " + transactionTicket.getFlightNumber() + "for " + String.valueOf(getPrice());
        // return ret; 
        return "temp";
    }

    public void calculateTotal(){

    }

    public String addInsurance(){
        // placeholder of an added insurance cost of 15% of ticket price
        setPrice(1.15 * price);
        String ret = "Insurance added for an additional 15%";
        return ret;
        // System.out.println("Insurance added for an additional cost of 15%");
    }

    public void modifyTicket(){

    }

    public void cancelTicket(){
        // cancel the ticket / flight 
    }

    public int getCustomerID() {
        return customerID;
    }

    public void setCustomerID(int customerID) {
        this.customerID = customerID;
    }

    public int getFlightID() {
        return flightID;
    }

    public void setFlightID(int flightID) {
        this.flightID = flightID;
    }

    public String getSeatCode() {
        return seatCode;
    }

    public void setSeatCode(String seatCode) {
        this.seatCode = seatCode;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
