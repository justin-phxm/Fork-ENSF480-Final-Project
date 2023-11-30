package ensf480.ucalgary.group12.AircraftPackage;


import ensf480.ucalgary.group12.AircraftPackage.Aircraft;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AircraftRepository extends JpaRepository<Aircraft, Integer> {
    public Aircraft findByAircraftName(String n);
}
