package ensf480.ucalgary.group12.UserPackage;

public class CompanyCreditCard extends MembershipDecorator{
    private String creditCardNumber;
    public CompanyCreditCard(Membership membership, String creditnum){
        super(membership);
        creditCardNumber = creditnum;
    }
    
    @Override
    public void viewMembership(){
        super.viewMembership();
        System.out.println(" with Company credit card number:" + creditCardNumber);
    }
}
