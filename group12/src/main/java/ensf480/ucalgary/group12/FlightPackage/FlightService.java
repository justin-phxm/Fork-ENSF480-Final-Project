package ensf480.ucalgary.group12.FlightPackage;

import java.time.LocalDateTime;
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

    public Flight getFlightA(String id){
        return repo.findByArrivalCity(id);
    }

    public Flight getFlightD(String id){
        return repo.findByDepartureCity(id);
    }

    public Flight getFlightAC(String id){
        return repo.findByArrivalAirport(id);
    }

    public Flight getFlightDC(String id){
        return repo.findByDepartureAirport(id);
    }
    
    public Flight getFlight(int id){
        return repo.findById(id).orElse(null);
    }

    public List<Flight> getFlightByDepTime(LocalDateTime date){
        return repo.findByDateOfDepartureAfter(date);
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
        existing.setArrivalCity(fl.getArrivalCity());
        existing.setDepartureAirport(fl.getDepartureAirport());
        existing.setArrivalAirport(fl.getArrivalAirport());
        existing.setDepartureCity(fl.getDepartureCity());
        return repo.save(existing);
    }
}



