package ensf480.ucalgary.group12.AircraftPackage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AircraftService {
    private final AircraftRepository repo;
    
    @Autowired
    public AircraftService(AircraftRepository r){
        this.repo = r;
    }

    public Aircraft getAircraftByName(String n){
        return repo.findByAircraftName(n);
    }

    public List<Aircraft> getAllAircrafts(){
        return repo.findAll();
    }

    public Aircraft saveAircraft(Aircraft ac){
       return repo.save(ac);
    }

    public String deleteAircraft(int id){
        try {
            repo.deleteById(id);
            return "Aircraft with ID " + id + " was removed";
        } catch (Exception e) {
            return "Aircraft with ID " + id + " not found";
        }
    }
}



