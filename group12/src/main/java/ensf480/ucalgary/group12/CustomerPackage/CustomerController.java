package ensf480.ucalgary.group12.CustomerPackage;

//import ensf480.ucalgary.group12.TransactionPackage.*;

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

    @GetMapping("/getCustomerByE/{id}")
    public Customer getCustomerByE(@PathVariable String id){
        return service.getCustomerByE(id);
    }

    @GetMapping("/getPassengers/{id}")
    public List<Customer> getPassengers(@PathVariable int id){
        return service.getPassengers(id);
    }

    @GetMapping("/view/{id}")
    public String viewMember(@PathVariable String id){
        Customer c = service.getCustomerByE(id);
        if (c == null){
            return "User does not exist";
        }
        return c.viewMembership();
    }

    // attempted to set up catching so that when member is set to false, it takes
    // away all of the perks. each of the perks
    // also tried to make them first check that isMember is true before adding them
    @PutMapping("/updateMemberStatus/{id}")
    public void updateMemberStatus(@PathVariable("id") String id, @RequestParam boolean newStatus) {
        service.updateMemberStatus(id, newStatus);
    }

    // note that atm updateCreditCard is randomly generating the card num. 
    // thus, delete is used for getting rid of it and update is really more like 
    // "add it in"
    @PutMapping("/updateCreditCard/{id}")
    public String updateCreditCard(@PathVariable("id") String id) {
        return service.updateCreditCardIfMember(id);
    }

    @DeleteMapping("/deleteCreditCard/{id}")
    public void deleteCreditCard(@PathVariable("id") String id) {
        service.deleteCreditCard(id);
    }

    @PutMapping("/updateCompanionTicket/{id}")
    public void updateCompanionTicket(@PathVariable("id") String id, @RequestParam boolean companionTicket) {
        service.updateCompanionTicket(id, companionTicket);
    }

    @PutMapping("/updateMonthlyEmails/{id}")
    public void updateMonthlyEmails(@PathVariable("id") String id, @RequestParam boolean monthlyEmails) {
        service.updateMonthlyEmails(id, monthlyEmails);
    }

    @PutMapping("/updateLoungeDiscount/{id}")
    public void updateLoungeDiscount(@PathVariable("id") String id, @RequestParam boolean loungeDiscount) {
        service.updateLoungeDiscount(id, loungeDiscount);
    }

    @PutMapping("/updateMemberPreferences/{id}")
    public void updateMemberPreferences(
        @PathVariable("id") String id,
        @RequestParam(required = false) Boolean companionTicket,
        @RequestParam(required = false) Boolean monthlyEmails,
        @RequestParam(required = false) Boolean loungeDiscount
    ) {
        service.updateMemberPreferences(id, companionTicket, monthlyEmails, loungeDiscount);
    }

    @PostMapping("/addCustomer")
    public void addCustomer(@RequestBody Customer customer) {
        service.addCustomer(customer);
    }
}
