package ensf480.ucalgary.group12.AircraftPackage;

import ensf480.ucalgary.group12.AircraftPackage.Aircraft;
import ensf480.ucalgary.group12.AircraftPackage.AircraftService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


import java.util.List;
@RestController
@RequestMapping(path = "/aircrafts")
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
}

