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

    @GetMapping("/getCustomers")
    public List<Customer> getCustomers(){
        return service.getAllCustomers();
    }

    @GetMapping("/getCustomer/{id}")
    public Customer getCustomer(@PathVariable("id") int id){
        return service.getCustomer(id);
    }

    @PutMapping("/updateMemberStatus/{id}")
    public void updateMemberStatus(@PathVariable("id") int id, @RequestParam boolean newStatus) {
        service.updateMemberStatus(id, newStatus);
    }

    @PutMapping("/updateCreditCard/{id}")
    public void updateCreditCard(@PathVariable("id") int id) {
        service.updateCreditCardIfMember(id);
    }

    @DeleteMapping("/deleteCreditCard/{id}")
    public void deleteCreditCard(@PathVariable("id") int id) {
        service.deleteCreditCard(id);
    }

    @PutMapping("/updateCompanionTicket/{id}")
    public void updateCompanionTicket(@PathVariable("id") int id, @RequestParam boolean companionTicket) {
        service.updateCompanionTicket(id, companionTicket);
    }

    @PutMapping("/updateMonthlyEmails/{id}")
    public void updateMonthlyEmails(@PathVariable("id") int id, @RequestParam boolean monthlyEmails) {
        service.updateMonthlyEmails(id, monthlyEmails);
    }

    @PutMapping("/updateLoungeDiscount/{id}")
    public void updateLoungeDiscount(@PathVariable("id") int id, @RequestParam boolean loungeDiscount) {
        service.updateLoungeDiscount(id, loungeDiscount);
    }
}
