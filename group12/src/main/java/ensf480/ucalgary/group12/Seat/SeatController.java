package ensf480.ucalgary.group12.Seat;

import ensf480.ucalgary.group12.Seat.Seat;
import ensf480.ucalgary.group12.Seat.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

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
