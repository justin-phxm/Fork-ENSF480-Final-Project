package main.java.ensf480.ucalgary.group12;

public class Seat {
    private boolean Availability;
    private String SeatNumber;
    private String SeatType;

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
}
