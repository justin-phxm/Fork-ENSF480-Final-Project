package ensf480.ucalgary.group12.UserPackage;

import ensf480.ucalgary.group12.TransactionPackage.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
@RestController
@RequestMapping(path = "/Customer")
@CrossOrigin(origins = "*")

public class CustomerController {
    private final CustomerService service;

    @Autowired
    public CustomerController(CustomerService s){
        this.service = s;
    }
}
