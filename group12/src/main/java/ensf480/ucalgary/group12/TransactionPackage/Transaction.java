package ensf480.ucalgary.group12.TransactionPackage;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int iD;
    @Column(name = "Email")
    private String email;
    @Column(name = "FlightID")
    private int flightID;
    @Column(name = "SeatCode")
    private String seatCode;
    @Column(name = "Aircraft")
    private int plane;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "TicketID")
    private Ticket ticket = new Ticket();
    @Transient
    private double price;

    public Transaction(){
    }

    public double calculateTotal(int insure, int stype){
        double total = 500;
        if (stype == 2){
            total *= 1.4;
        }
        else if (stype == 3){
            total *= 1.9;
        }

        if (insure == 1){
            total *= 1.15;
        }

        return total;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String e) {
        this.email = e;
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

    public int getiD() {
        return iD;
    }

    public void setiD(int iD) {
        this.iD = iD;
    }

    public Ticket getTicket() {
        return ticket;
    }

    public void setTicket(Ticket ticket) {
        this.ticket = ticket;
    }

    public int getPlane() {
        return plane;
    }

    public void setPlane(int plane) {
        this.plane = plane;
    }
}
