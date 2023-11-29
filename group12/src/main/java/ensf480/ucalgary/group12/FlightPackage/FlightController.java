package ensf480.ucalgary.group12.FlightPackage;

import java.time.LocalDateTime;
import java.util.Date;
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
    public List<Flight> getFlightA(@PathVariable("id") String id){
        return service.getFlightA(id);
    }

    @GetMapping("/getFlightDest/{id}")
    public List<Flight> getFlightD(@PathVariable("id") String id){
        return service.getFlightD(id);
    }

    @GetMapping("/getFlightArriveCode/{id}")
    public List<Flight> getFlightAC(@PathVariable("id") String id){
        return service.getFlightAC(id);
    }

    @GetMapping("/getFlightDestCode/{id}")
    public List<Flight> getFlightDC(@PathVariable("id") String id){
        return service.getFlightDC(id);
    }

    @GetMapping("getFlightByDep/{date}")
    public List<Flight> getFlightDepTime(@PathVariable String date) {
        LocalDateTime departureTime = LocalDateTime.parse(date);
        Date departureDate = java.sql.Timestamp.valueOf(departureTime);
        return service.getFlightByDepTime(departureDate);
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
