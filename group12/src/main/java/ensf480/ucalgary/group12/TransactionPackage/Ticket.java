package ensf480.ucalgary.group12.TransactionPackage;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "Ticket")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "SeatNumber")
    private String seatNumber;
    @Column(name = "Destination")
    private String destination;
    @Column(name = "Origin")
    private String origin;
    @Column(name = "PlaneID")
    private int planeID;
    @OneToOne(mappedBy = "ticket")
    private Transaction t;

    public Ticket(){     
    }

    public String getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(String seatNumber) {
        this.seatNumber = seatNumber;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public int getPlaneID() {
        return planeID;
    }

    public void setPlaneID(int planeID) {
        this.planeID = planeID;
    }
}
