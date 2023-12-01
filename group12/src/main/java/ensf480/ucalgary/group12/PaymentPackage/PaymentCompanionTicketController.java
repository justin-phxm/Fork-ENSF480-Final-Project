package ensf480.ucalgary.group12.PaymentPackage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ensf480.ucalgary.group12.CustomerPackage.*;

@RestController
@RequestMapping("/paymentcom")
@CrossOrigin(origins = "*")
public class PaymentCompanionTicketController {
    private final CustomerService s;

    @Autowired
    public PaymentCompanionTicketController(CustomerService customerService){
        this.s = customerService;
    }

    @GetMapping("/processCompanionTicketPayment/{id}")
    public String processCompanionTicketPayment(@PathVariable("id") int customerID){
        Customer customer = s.getCustomer(customerID);

        PaymentCompanionTicket payCompTick = new PaymentCompanionTicket(customer);

        return payCompTick.pay();
    }
}
