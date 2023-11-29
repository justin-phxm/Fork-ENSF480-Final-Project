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

    // attempted to set up catching so that when member is set to false, it takes
    // away all of the perks. each of the perks
    // also tried to make them first check that isMember is true before adding them
    @PutMapping("/updateMemberStatus/{id}")
    public void updateMemberStatus(@PathVariable("id") int id, @RequestParam boolean newStatus) {
        service.updateMemberStatus(id, newStatus);
    }

    // note that atm updateCreditCard is randomly generating the card num. 
    // thus, delete is used for getting rid of it and update is really more like 
    // "add it in"
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
