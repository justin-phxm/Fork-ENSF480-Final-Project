package ensf480.ucalgary.group12.FlightPackage;


import ensf480.ucalgary.group12.FlightPackage.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Integer> {
    
}
