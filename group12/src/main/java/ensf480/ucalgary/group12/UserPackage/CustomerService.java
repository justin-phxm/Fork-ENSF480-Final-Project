package ensf480.ucalgary.group12.UserPackage;

import ensf480.ucalgary.group12.TransactionPackage.*;
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
        return repo.findByCustomerID(id);
    }

    public void updateMemberStatus(int customerId, boolean newStatus) {
        Customer customer = repo.findByCustomerID(customerId);
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

    public void updateCreditCardIfMember(int customerId) {
        Customer customer = repo.findByCustomerID(customerId);

        if (customer != null && customer.getIsMember()) {
            String newCreditCard = generateRandomCreditCard();
            customer.setCreditCardNum(newCreditCard);
            repo.save(customer);
        }
    }

    public void deleteCreditCard(int customerId) {
        Customer customer = repo.findByCustomerID(customerId);

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

    public void updateCompanionTicket(int customerId, boolean companionTicket) {
        Customer customer = repo.findByCustomerID(customerId);

        if (customer != null && customer.getIsMember()) {
            customer.setCompanionTicket(companionTicket);
            repo.save(customer);
        }
    }

    public void updateMonthlyEmails(int customerId, boolean monthlyEmails) {
        Customer customer = repo.findByCustomerID(customerId);

        if (customer != null && customer.getIsMember()) {
            customer.setMonthlyEmails(monthlyEmails);
            repo.save(customer);
        }
    }

    public void updateLoungeDiscount(int customerId, boolean loungeDiscount) {
        Customer customer = repo.findByCustomerID(customerId);

        if (customer != null && customer.getIsMember()) {
            customer.setLoungeDiscount(loungeDiscount);
            repo.save(customer);
        }
    }
}
