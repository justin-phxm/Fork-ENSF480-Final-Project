package ensf480.ucalgary.group12.MemberPackage;

//import ensf480.ucalgary.group12.MemberPackage.MembershipDecorator;

public class FreeCompanionTicket extends MembershipDecorator{
    public FreeCompanionTicket(Membership membership){
        super(membership);
    }
    @Override
    public String viewMembership(){
        String ret1 = super.viewMembership();
        String ret2 = " + Companion Ticket";
        return ret1 + ret2;
    }
}
