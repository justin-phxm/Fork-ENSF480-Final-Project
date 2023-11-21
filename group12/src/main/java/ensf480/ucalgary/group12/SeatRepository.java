package main.java.ensf480.ucalgary.group12;

import main.java.ensf480.ucalgary.group12.Seat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SeatRepository extends JpaRepository<Seat, Integer>{

    public List<Seat> findSeats(int airID);
}
