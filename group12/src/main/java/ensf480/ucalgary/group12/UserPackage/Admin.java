package ensf480.ucalgary.group12.UserPackage;

import ensf480.ucalgary.group12.AircraftPackage.AircraftRepository;
import ensf480.ucalgary.group12.FlightPackage.FlightRepository;
import ensf480.ucalgary.group12.AircraftPackage.Aircraft;
import ensf480.ucalgary.group12.FlightPackage.Flight;

import java.sql.*;
import java.util.Properties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Admin extends User{

    @Autowired
    private FlightRepository flightRepository;

    @Autowired
    private AircraftRepository aircraftRepository;

    private String firstName;
    private String lastName;
    private String AdminID;
    private BrowseStrategy browseStyle;

    public Admin(){

    }

    public void addFlight(String departureAirport, String arrivalAirport, Date departureTime, Date arrivalTime, int aircraftID){
        Flight newFlight = new Flight();
        newFlight.setOriginCity(departureAirport);
        newFlight.setDestinationCity(arrivalAirport);
        newFlight.setDateOfDeparture(departureTime);
        newFlight.setDateOfArrival(arrivalTime);

        Aircraft aircraft = aircraftRepository.findById(aircraftID).orElseThrow(() -> new RuntimeException("Aircraft not found"));
        newFlight.setAircraftID(aircraft);

        flightRepository.save(newFlight);

    }

    public void removeFlight(){

    }

    public void addAircraft(){

    }

    public void removeAircraft(){

    }

    public void addCrew(){

    }

    public void removeCrew(){

    }

    public void modifyFlightInfo(){

    }

    public void viewMembers(){

    }
    @Override
    public void performBrowseStrategy(){

    }
}
