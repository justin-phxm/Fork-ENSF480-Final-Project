package ensf480.ucalgary.group12.Seat;

import ensf480.ucalgary.group12.Seat.Seat;
import ensf480.ucalgary.group12.Seat.SeatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatService {

    private final SeatRepository repo;
    
    @Autowired
    public SeatService(SeatRepository r){
        this.repo = r;
    }

    public List<Seat> getSeatsByAircraft(int SeatsID){
        return repo.findBySeatsID(SeatsID);
    }
}
