package ensf480.ucalgary.group12.Seat;

import jakarta.persistence.*;
import ensf480.ucalgary.group12.AircraftPackage.Aircraft;

@Entity
@Table(name = "Seats")
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int iD;
    @Column(name = "SeatsID")
    private int seatsID;
    @Column(name = "Availability")
    private boolean availability;
    @Column(name = "SeatType")
    private String seatType;
    @Column(name = "SeatCode")
    private String seatNumber;
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "AircraftID")
    private Aircraft aircraft;

    public Seat(){

    }

    public void setAvailability(boolean val){
        this.availability = val;
    }

    public boolean getAvailability(){
        return this.availability;
    }

    public String getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(String sn) {
        seatNumber = sn;
    }

    public String getSeatType() {
        return seatType;
    }

    public void setSeatType(String st) {
        seatType = st;
    }

    public int getSeatsID() {
        return seatsID;
    }

    public void setSeatsID(int sid) {
        seatsID = sid;
    }
}
