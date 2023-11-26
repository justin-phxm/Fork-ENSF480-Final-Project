package ensf480.ucalgary.group12.UserPackage;

import ensf480.ucalgary.group12.FlightPackage.Flight;
import ensf480.ucalgary.group12.FlightPackage.FlightService;
import ensf480.ucalgary.group12.AircraftPackage.Aircraft;
import ensf480.ucalgary.group12.AircraftPackage.AircraftService;

public class Admin extends User{
    private String firstName;
    private String lastName;
    private String AdminID;
    private BrowseStrategy browseStyle;

    private final FlightService flightService;
    private final AircraftService aircraftService;

    public Admin(FlightService flightService, AircraftService aircraftService){
        this.flightService = flightService;
        this.aircraftService = aircraftService;
    }

    public void addFlight(Flight flight){
        flightService.updateFlight(flight);
    }

    public void removeFlight(int flightID){
        flightService.deleteFlight(flightID);
    }

    public void addAircraft(Aircraft aircraft){
        aircraftService.saveAircraft(aircraft);
    }

    public void removeAircraft(int AircraftID){
        aircraftService.deleteAircraft(AircraftID);
    }

    public void addCrew(){

    }

    public void removeCrew(){

    }

    public void modifyFlightInfo(Flight flight){
        flightService.updateFlight(flight);
    }

    public void viewMembers(){

    }
    @Override
    public void performBrowseStrategy(){

    }
}
