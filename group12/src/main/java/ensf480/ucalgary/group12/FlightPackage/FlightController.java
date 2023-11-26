package ensf480.ucalgary.group12.FlightPackage;

import ensf480.ucalgary.group12.FlightPackage.Flight;
import ensf480.ucalgary.group12.FlightPackage.FlightService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


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

    @GetMapping("/getFlight/{id}")
    public Flight getFlight(@PathVariable("id") int id){
        return service.getFlight(id);
    }

    @DeleteMapping("/deleteFlight/{id}")
    public String deleteFlight(@PathVariable("id") int id){
        return service.deleteFlight(id);
    }

    @PutMapping("/updateFlight")
    public Flight updateFlight(@RequestBody Flight fl){
        return service.updateFlight(fl);
    }
}
