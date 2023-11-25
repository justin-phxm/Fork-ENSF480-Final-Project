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
}



