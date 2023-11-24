package ensf480.ucalgary.group12.Seat;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;

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
    @Column(name = "SeatNumber")
    private String seatNumber;

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
