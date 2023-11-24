package ensf480.ucalgary.group12.Seat;

import ensf480.ucalgary.group12.Seat.Seat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeatRepository extends JpaRepository<Seat, Integer>{

    public List<Seat> findBySeatsID(int seatsID);
}
