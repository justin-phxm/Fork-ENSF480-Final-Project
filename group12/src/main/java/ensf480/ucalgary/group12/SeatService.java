package main.java.ensf480.ucalgary.group12;

import main.java.ensf480.ucalgary.group12.Seat;
import main.java.ensf480.ucalgary.group12.SeatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatService {
    @Autowired
    private SeatRepository repo;

    public List<Seat> getSeatsByAircraft(int airID){
        return repo.findSeats(airID);
    }
}
