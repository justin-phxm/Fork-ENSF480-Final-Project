package main.java.ensf480.ucalgary.group12;

import main.java.ensf480.ucalgary.group12.Seat;
import main.java.ensf480.ucalgary.group12.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
@RestController
public class SeatController {
    
    @Autowired
    private SeatService service;

    @GetMapping("/getSeats/{id}")
    public List<Seat> getSeats(@PathVariable int airID){
        return service.getSeatsByAircraft(airID);
    }
}
