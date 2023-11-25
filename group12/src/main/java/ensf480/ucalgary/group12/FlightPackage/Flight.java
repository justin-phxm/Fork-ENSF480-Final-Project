package ensf480.ucalgary.group12.FlightPackage;

import java.beans.Transient;
import java.util.Date;

import ensf480.ucalgary.group12.UserPackage.CrewMember;
import ensf480.ucalgary.group12.UserPackage.Customer;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import main.java.ensf480.ucalgary.group12.Aircraft;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;

@Entity
@Table(name = "Flights")
public class Flight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int flightID;
    @Column(name = "DepartureAirport")
    private String originCity;
    @Column(name = "ArrivalAirport")
    private String destinationCity;
    @Column(name = "AircraftID") // IDK
    private Aircraft flightAircraft;
    @Column(name = "ArrivalTime")
    private Date dateOfArrival;
    @Column(name = "DepartureTime")
    private Date dateOfDeparture;
    @Transient
    private String flightNum;
    @Transient
    private CrewMember[] Crew;
    @Transient
    private Customer[] Passengers;

    public Flight(){
        
    }

    public String getDestinationCity() {
        return destinationCity;
    }

    public void setDestinationCity(String destinationCity) {
        this.destinationCity = destinationCity;
    }

    public String getOriginCity() {
        return originCity;
    }

    public void setOriginCity(String originCity) {
        this.originCity = originCity;
    }

    public Aircraft getFlightAircraft() {
        return flightAircraft;
    }

    public void setFlightAircraft(Aircraft flightAircraft) {
        this.flightAircraft = flightAircraft;
    }

    public Date getDateOfArrival() {
        return dateOfArrival;
    }

    public void setDateOfArrival(Date dateOfArrival) {
        this.dateOfArrival = dateOfArrival;
    }

    public Date getDateOfDeparture() {
        return dateOfDeparture;
    }

    public void setDateOfDeparture(Date dateOfDeparture) {
        this.dateOfDeparture = dateOfDeparture;
    }

    public String getFlightNum() {
        return flightNum;
    }

    public void setFlightNum(String flightNum) {
        this.flightNum = flightNum;
    }

    public CrewMember[] getCrew() {
        return Crew;
    }

    public void setCrew(CrewMember[] crew) {
        Crew = crew;
    }

    public Customer[] getPassengers() {
        return Passengers;
    }

    public void setPassengers(Customer[] passengers) {
        Passengers = passengers;
    }
}
