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
    public String processCompanionTicketPayment(@PathVariable("id") String id){
        Customer customer = s.getCustomerByE(id);

        //PaymentCompanionTicket payCompTick = new PaymentCompanionTicket(customer);
        if (customer != null && customer.getCompanionTicket()) {
            PaymentCompanionTicket payCompTick = new PaymentCompanionTicket(customer);

            String paymentResult = payCompTick.pay();

            if ("Payment details for Member Companion Ticket found, completing payment".equals(paymentResult)) {
                // Save the updated customer information to the database
                s.updateCompanionTicket(id, false);
            }

            return paymentResult;
        } else {
            return "Member Companion Ticket not found";
        }
        //return payCompTick.pay();
    }
}
