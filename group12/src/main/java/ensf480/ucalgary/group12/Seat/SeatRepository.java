package ensf480.ucalgary.group12.Seat;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SeatRepository extends JpaRepository<Seat, Integer>{

    public List<Seat> findBySeatsID(int seatsID);
    public Seat findBySeatCodeAndSeatsID(String seatCode, int seatID);
}
