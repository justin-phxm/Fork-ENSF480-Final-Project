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
    private String seatCode;
    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name = "Plane")
    private Aircraft aircraft;
    
    public Seat() {
    }

    public Seat(int seatsID, boolean availability, String seatType, String seatCode) {
        this.seatsID = seatsID;
        this.availability = availability;
        this.seatType = seatType;
        this.seatCode = seatCode;
    }

    public void setAvailability(boolean val){
        this.availability = val;
    }

    public boolean getAvailability(){
        return this.availability;
    }

    public String getseatCode() {
        return seatCode;
    }

    public void setseatCode(String sn) {
        seatCode = sn;
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
