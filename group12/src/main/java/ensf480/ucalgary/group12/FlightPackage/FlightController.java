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

    @GetMapping("/getFlightArrive/{id}")
    public Flight getFlightA(@PathVariable("id") String id){
        return service.getFlightA(id);
    }

    @GetMapping("/getFlightDest/{id}")
    public Flight getFlightD(@PathVariable("id") String id){
        return service.getFlightD(id);
    }

    @GetMapping("/getFlightArriveCode/{id}")
    public Flight getFlightAC(@PathVariable("id") String id){
        return service.getFlightAC(id);
    }

    @GetMapping("/getFlightDestCode/{id}")
    public Flight getFlightDC(@PathVariable("id") String id){
        return service.getFlightDC(id);
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
