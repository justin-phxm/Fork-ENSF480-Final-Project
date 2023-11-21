package main.java.ensf480.ucalgary.group12;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Seats")
public class Seat {
    @Id
    private int ID;
    private int SeatsID;
    private boolean Availability;
    private String SeatType;
    private String SeatNumber;

    public Seat(){

    }

    public void setAvailability(boolean val){
        this.Availability = val;
    }

    public boolean getAvailability(){
        return this.Availability;
    }

    public String getSeatNumber() {
        return SeatNumber;
    }

    public void setSeatNumber(String seatNumber) {
        SeatNumber = seatNumber;
    }

    public String getSeatType() {
        return SeatType;
    }

    public void setSeatType(String seatType) {
        SeatType = seatType;
    }

    public int getSeatsID() {
        return SeatsID;
    }

    public void setSeatsID(int seatsID) {
        SeatsID = seatsID;
    }
}
