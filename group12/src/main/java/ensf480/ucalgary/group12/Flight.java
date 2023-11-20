package main.java.ensf480.ucalgary.group12;

import java.util.Date;

public class Flight {
    private String destinationCity;
    private String originCity;
    private Aircraft flightAircraft;
    private Date dateOfArrival;
    private Date dateOfDeparture;
    private String flightNum;
    private CrewMember[] Crew;
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
