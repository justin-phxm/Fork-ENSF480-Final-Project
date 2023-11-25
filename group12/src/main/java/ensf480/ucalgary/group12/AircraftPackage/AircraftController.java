package ensf480.ucalgary.group12.AircraftPackage;

import ensf480.ucalgary.group12.AircraftPackage.Aircraft;
import ensf480.ucalgary.group12.AircraftPackage.AircraftService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
@RestController
@RequestMapping(path = "/aircrafts")
@CrossOrigin(origins = "*")
public class AircraftController {
    private final AircraftService service;
    
    @Autowired
    public AircraftController(AircraftService s){
        this.service = s;
    }
    
    @GetMapping("/getAircrafts")
    public List<Aircraft> getAircrafts(){
       return service.getAllAircrafts();
    }

    @PostMapping("/addAircraft")
    public Aircraft addAircraft(@RequestBody Aircraft ac){
        return service.saveAircraft(ac);
    }

    @DeleteMapping("/deleteAircraft/{id}")
    public String deleteAircraft(@PathVariable("id") int id){
        return service.deleteAicraft(id);
    }
}

