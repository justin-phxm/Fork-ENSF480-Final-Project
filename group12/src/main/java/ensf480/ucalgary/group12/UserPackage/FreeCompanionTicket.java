package ensf480.ucalgary.group12.UserPackage;

public class FreeCompanionTicket extends MembershipDecorator{
    public FreeCompanionTicket(Membership membership){
        super(membership);
    }
    @Override
    public void viewMembership(){
        super.viewMembership();
        System.out.println(" + Companion Ticket");
    }
}
