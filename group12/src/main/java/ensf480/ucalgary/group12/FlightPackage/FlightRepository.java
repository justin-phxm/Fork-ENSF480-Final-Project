package ensf480.ucalgary.group12.FlightPackage;


import ensf480.ucalgary.group12.FlightPackage.Flight;
import ensf480.ucalgary.group12.Seat.Seat;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Integer> {

    public Flight findByArrivalCity(String id);
    public Flight findByArrivalAirport(String id);
    public Flight findByDepartureCity(String id);
    public Flight findByDepartureAirport(String id);
    
}
