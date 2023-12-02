package ensf480.ucalgary.group12.Seat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public Seat findSeatByCodeAndID(String seatCode, int seatID) {
        return repo.findBySeatCodeAndSeatsID(seatCode, seatID);
    }

    public Seat updateSeat(Seat s){
        Seat exists = repo.findBySeatCodeAndSeatsID(s.getseatCode(), s.getSeatsID());
        if (exists == null){
            return null;
        }
        return repo.save(s);
    }
}
