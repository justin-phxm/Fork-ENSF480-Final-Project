package ensf480.ucalgary.group12.CustomerPackage;

//import ensf480.ucalgary.group12.TransactionPackage.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class CustomerService {
    private final CustomerRepository repo;

    @Autowired
    public CustomerService(CustomerRepository r){
        this.repo = r;
    }

    public List<Customer> getAllCustomers(){
        return repo.findAll();
    }

    public Customer getCustomer(int id){
        return repo.findByID(id);
    }

    public Customer getCustomerByE(String id){
        return repo.findByEmail(id);
    }

    public List<Customer> getPassengers(int id){
        return repo.findByOnflight(id);
    }

    public void updateMemberStatus(String customerId, boolean newStatus) {
        Customer customer = repo.findByEmail(customerId);
        if (customer != null) {
            if(newStatus){
                customer.setIsMember(true);
            }
            else{
                customer.setIsMember(false);
                customer.setCreditCardNum(null);
                customer.setCompanionTicket(false);
                customer.setMonthlyEmails(false);
                customer.setLoungeDiscount(false);
            }
            repo.save(customer);
        }
    }

    public void updateCreditCardIfMember(String customerId) {
        Customer customer = repo.findByEmail(customerId);

        if (customer != null && customer.getIsMember()) {
            String newCreditCard = generateRandomCreditCard();
            customer.setCreditCardNum(newCreditCard);
            repo.save(customer);
        }
    }

    public void deleteCreditCard(String customerId) {
        Customer customer = repo.findByEmail(customerId);

        if (customer != null) {
            // Set creditCard to null
            customer.setCreditCardNum(null);
            repo.save(customer);
        }
    }

    private String generateRandomCreditCard() {
        // Generate a random 16-digit credit card number
        Random random = new Random();
        StringBuilder creditCard = new StringBuilder();
        for (int i = 0; i < 16; i++) {
            creditCard.append(random.nextInt(10));
        }
        return creditCard.toString();
    }

    //

    public void updateCompanionTicket(String customerId, boolean companionTicket) {
        Customer customer = repo.findByEmail(customerId);

        if (customer != null && customer.getIsMember()) {
            customer.setCompanionTicket(companionTicket);
            repo.save(customer);
        }
    }

    public void updateMonthlyEmails(String customerId, boolean monthlyEmails) {
        Customer customer = repo.findByEmail(customerId);

        if (customer != null && customer.getIsMember()) {
            customer.setMonthlyEmails(monthlyEmails);
            repo.save(customer);
        }
    }

    public void updateLoungeDiscount(String customerId, boolean loungeDiscount) {
        Customer customer = repo.findByEmail(customerId);

        if (customer != null && customer.getIsMember()) {
            customer.setLoungeDiscount(loungeDiscount);
            repo.save(customer);
        }
    }

    public void addCustomer(Customer customer) {
        // Ensure that the customer's email is not null or empty
        if (customer.getEmail() == null || customer.getEmail().isEmpty()) {
            return;
        }

        Customer existingCustomer = repo.findByEmail(customer.getEmail());

        if (existingCustomer == null) {
            // If the customer doesn't exist, save the new customer
            repo.save(customer);
        } else {
            // If the customer already exists, update the customer details
            existingCustomer.setFirstName(customer.getFirstName());
            existingCustomer.setLastName(customer.getLastName());
            existingCustomer.setIsMember(customer.getIsMember());
            existingCustomer.setCreditCardNum(customer.getCreditCardNum());
            existingCustomer.setCompanionTicket(customer.getCompanionTicket());
            existingCustomer.setMonthlyEmails(customer.getMonthlyEmails());
            existingCustomer.setLoungeDiscount(customer.getLoungeDiscount());
            existingCustomer.setAddress(customer.getAddress());
            existingCustomer.setOnflight(customer.getOnflight());
            repo.save(existingCustomer);
        }
    }
}
