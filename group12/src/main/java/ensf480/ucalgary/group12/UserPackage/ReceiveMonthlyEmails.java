package ensf480.ucalgary.group12.UserPackage;

public class ReceiveMonthlyEmails extends MembershipDecorator{
    public ReceiveMonthlyEmails(Membership membership){
        super(membership);
    }

    @Override
    public void viewMembership(){
        super.viewMembership();
        System.out.println(" + Monthly Email Subscription");
    }
}
