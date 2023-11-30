package ensf480.ucalgary.group12.FlightPackage;

import java.time.LocalDateTime;
import java.util.Date;
import ensf480.ucalgary.group12.FlightPackage.Flight;
import ensf480.ucalgary.group12.FlightPackage.FlightService;
import ensf480.ucalgary.group12.AircraftPackage.AircraftService;
import ensf480.ucalgary.group12.AircraftPackage.Aircraft;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
@RestController
@RequestMapping(path = "/flights")
@CrossOrigin(origins = "*")
public class FlightController {
    private final FlightService service;
    private final AircraftService sservice;
    
    @Autowired
    public FlightController(FlightService s, AircraftService ss){
        this.service = s;
        this.sservice = ss;
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
    
    @PostMapping("/addFlight")
    public Flight addFlight(@RequestBody Flight f){
        System.out.println(f.getPlane().getAircraftName());
        Aircraft exist = sservice.getAircraftByName(f.getPlane().getAircraftName());
        
        if (exist != null){
            System.out.println(exist.getAircraftName());
            System.out.println(exist.getAircraftID());
            f.setPlane(exist);
        }
        else{
            sservice.saveAircraft(f.getPlane());
        }
        return service.addFlight(f);
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
