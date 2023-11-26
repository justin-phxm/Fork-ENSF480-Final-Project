package ensf480.ucalgary.group12.UserPackage;

public abstract class MembershipDecorator implements Membership{
    private Membership membership;

    MembershipDecorator(Membership membership){
        this.membership = membership;
    }

    @Override
    public void viewMembership(){
        membership.viewMembership();
    }
}
