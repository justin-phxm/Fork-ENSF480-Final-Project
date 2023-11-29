package ensf480.ucalgary.group12.UserPackage;

public class CompanyCreditCard extends MembershipDecorator{
//    private String creditCardNumber;
//    public CompanyCreditCard(Membership membership, String creditnum){
//        super(membership);
//        creditCardNumber = creditnum;
//    }

    // not sure about how storing companycredit card
    // seems to be stored as string for the customer in customer.java
    // instead
    public CompanyCreditCard(Membership membership){
        super(membership);
    }
    
    @Override
    public String viewMembership(){
        String ret1 = super.viewMembership();
        //System.out.println(" with Company credit card number:" + creditCardNumber);
        String ret = " + Company Credit card";
        return ret1 + ret;
    }
}
