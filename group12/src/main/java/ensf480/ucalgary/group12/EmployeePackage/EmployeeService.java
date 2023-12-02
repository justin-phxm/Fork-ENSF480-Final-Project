package ensf480.ucalgary.group12.EmployeePackage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    private final EmployeeRepository repo;

    @Autowired
    EmployeeService(EmployeeRepository repo){
        this.repo = repo;
    }

    public List<Employee> getAllEmployees(){
        return repo.findAll();
    }

    public Employee addEmployee(Employee e){
        Employee f = repo.findByEmail(e.getEmail());
        if (f!=null){
            return null;
        }
        return repo.save(e);
    }

    public String removeEmployee(int e){
        try {
            repo.deleteById(e);
            return "Employee with ID " + e + " was removed";
        } catch (Exception f) {
            return "Employee with ID " + e + " not found";
        }
    }
}
