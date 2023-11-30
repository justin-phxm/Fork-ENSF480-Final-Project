package ensf480.ucalgary.group12.AircraftPackage;

import ensf480.ucalgary.group12.Seat.Seat;
import ensf480.ucalgary.group12.FlightPackage.Flight;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "Aircrafts")
public class Aircraft {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "AircraftID")
    private int aircraftID;

    @Column(name = "AircraftName")
    private String aircraftName;

    @OneToMany(mappedBy = "aircraft", fetch = FetchType.EAGER)
    private List<Seat> seats;

    @OneToMany(mappedBy = "plane")
    private List<Flight> flight;

    public Aircraft() {
    }

    public int getAircraftID() {
        return aircraftID;
    }

    public void setAircraftID(int aircraftID) {
        this.aircraftID = aircraftID;
    }

    public String getAircraftName() {
        return aircraftName;
    }

    public void setAircraftName(String name) {
        this.aircraftName = name;
    }

    // public List<Seat> getSeats() {
    //     return seats;
    // }

    // public void setSeats(List<Seat> seats) {
    //     this.seats = seats;
    // }

    // public Flight getFlight() {
    //     return flight;
    // }

    // public void setFlight(Flight flight) {
    //     this.flight = flight;
    // }

}