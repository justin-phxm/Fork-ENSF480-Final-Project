package ensf480.ucalgary.group12.MemberPackage;

//import ensf480.ucalgary.group12.MemberPackage.MembershipDecorator;

public class ReceiveMonthlyEmails extends MembershipDecorator{
    public ReceiveMonthlyEmails(Membership membership){
        super(membership);
    }

    @Override
    public String viewMembership(){
        //String ret1 = super.viewMembership();
        String ret2 = " + Monthly Email Subscription";
        //return ret1 + ret2;
        return ret2;
    }
}
