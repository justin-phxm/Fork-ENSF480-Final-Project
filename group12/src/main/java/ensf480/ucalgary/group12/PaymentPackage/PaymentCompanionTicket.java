package ensf480.ucalgary.group12.PaymentPackage;
import ensf480.ucalgary.group12.CustomerPackage.*;

public class PaymentCompanionTicket implements PaymentStrategy{
    private Customer customer;

    public PaymentCompanionTicket(Customer customer){
        this.customer = customer;
    }

    @Override
    public boolean validate(){
        return customer != null && customer.getIsMember() && customer.getCompanionTicket();
    }

    @Override
    public String pay(){
        if(validate()){
            return "Payment details for Member Companion Ticket found, completing payment";
        }
        else{
            return "Member Companion Ticket not found";
        }
    }
}
