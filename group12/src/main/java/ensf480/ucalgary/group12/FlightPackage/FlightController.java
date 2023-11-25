package ensf480.ucalgary.group12.FlightPackage;

import ensf480.ucalgary.group12.FlightPackage.Flight;
import ensf480.ucalgary.group12.FlightPackage.FlightService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


import java.util.List;
@RestController
@RequestMapping(path = "/flights")
@CrossOrigin(origins = "*")
public class FlightController {
    private final FlightService service;
    
    @Autowired
    public FlightController(FlightService s){
        this.service = s;
    }
    
    @GetMapping("/getFlights")
    public List<Flight> getFlights(){
       return service.getAllFlights();
    }
}
