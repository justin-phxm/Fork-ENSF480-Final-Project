package ensf480.ucalgary.group12.Seat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/seats")
@CrossOrigin(origins = "*")
// @CrossOrigin
public class SeatController {

    private final SeatService service;

    @Autowired
    public SeatController(SeatService s) {
        this.service = s;
    }

    @GetMapping("/getSeats/{id}")
    public List<Seat> getSeats(@PathVariable("id") int SeatsID) {
        return service.getSeatsByAircraft(SeatsID);
    }
}
