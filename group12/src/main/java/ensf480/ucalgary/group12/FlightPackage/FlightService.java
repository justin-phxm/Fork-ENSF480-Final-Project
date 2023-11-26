package ensf480.ucalgary.group12.FlightPackage;

import ensf480.ucalgary.group12.FlightPackage.Flight;
import ensf480.ucalgary.group12.FlightPackage.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightService {
    private final FlightRepository repo;
    
    @Autowired
    public FlightService(FlightRepository r){
        this.repo = r;
    }

    public List<Flight> getAllFlights(){
        return repo.findAll();
    }

    public Flight getFlight(int id){
        return repo.findById(id).orElse(null);
    }

    public String deleteFlight(int id){
        try{
            repo.deleteById(id);
            return "Flight with ID " + id + " was removed";
        }
        catch(Exception e){
            return "Flight with ID " + id + " not found";
        }
    }

    public Flight updateFlight(Flight fl){
        Flight existing = repo.findById(fl.getFlightID()).orElse(null);
        existing.setDateOfArrival(fl.getDateOfArrival());
        existing.setDateOfDeparture(fl.getDateOfDeparture());
        existing.setDestinationCity(fl.getDestinationCity());
        existing.setOriginCity(fl.getOriginCity());
        return repo.save(existing);
    }
}



