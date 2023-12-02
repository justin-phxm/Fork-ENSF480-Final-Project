package ensf480.ucalgary.group12.PaymentPackage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ensf480.ucalgary.group12.CustomerPackage.*;

@RestController
@RequestMapping("/paymentcre")
@CrossOrigin(origins = "*")
public class PaymentMemberCreditController {
    private final CustomerService s;

    @Autowired
    public PaymentMemberCreditController(CustomerService customerService){
        this.s = customerService;
    }

    @GetMapping("/processCreditCardPayment/{id}")
    public String processCreditCardPayment(@PathVariable("id") String id){
        Customer customer = s.getCustomerByE(id);

        PaymentMemberCredit payMemCred = new PaymentMemberCredit(customer);
        return payMemCred.pay();
    }

}
