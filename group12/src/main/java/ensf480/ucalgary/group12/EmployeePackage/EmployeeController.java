package ensf480.ucalgary.group12.EmployeePackage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/Employee")
@CrossOrigin(origins = "*")

public class EmployeeController {
    private final EmployeeService service;

    @Autowired
    public EmployeeController(EmployeeService s){
        this.service = s;
    }

    @GetMapping("/getEmployees")
    public List<Employee> getEmployees(){
        return service.getAllEmployees();
    }

    @PostMapping("/addEmployee")
    public Employee addEmployee(@RequestBody Employee e){
        return service.addEmployee(e);
    }

    @DeleteMapping("/removeEmployee/{e}")
    public String deleteEmployee(@PathVariable int e){
        return service.removeEmployee(e);
    }
}
