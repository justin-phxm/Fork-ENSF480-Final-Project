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
    private String name;

    @OneToMany(mappedBy = "aircraft", fetch = FetchType.EAGER)
    private List<Seat> seats;

    @OneToOne(mappedBy = "plane")
    private Flight flight;

    public Aircraft() {
    }

    public Aircraft(String name) {
        this.name = name;
    }

    public int getAircraftID() {
        return aircraftID;
    }

    public void setAircraftID(int aircraftID) {
        this.aircraftID = aircraftID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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