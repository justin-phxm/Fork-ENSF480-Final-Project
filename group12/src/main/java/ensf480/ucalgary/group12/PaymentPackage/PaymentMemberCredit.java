package ensf480.ucalgary.group12.PaymentPackage;
import ensf480.ucalgary.group12.CustomerPackage.*;

public class PaymentMemberCredit implements PaymentStrategy{
    private Customer customer;

    public PaymentMemberCredit(Customer customer){
        this.customer = customer;
    }

    @Override 
    public boolean validate(){
        return customer != null && customer.getIsMember() && ((customer.getCreditCardNum()).length() == 16);
    }

    @Override
    public String pay(){
        if(validate()){
            return "Payment details for Member CreditCard found, completing payment";
        }
        else{
            return "Member CreditCard details not found";
        }
    }
}
