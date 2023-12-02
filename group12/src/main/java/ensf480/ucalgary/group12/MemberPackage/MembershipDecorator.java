package ensf480.ucalgary.group12.MemberPackage;

//import ensf480.ucalgary.group12.MemberPackage.Membership;

public abstract class MembershipDecorator implements Membership {
    private Membership membership;

    MembershipDecorator(Membership membership) {
        this.membership = membership;
    }

    @Override
    public String viewMembership() {
        membership.viewMembership();
        // has "basic membership" return for now since the other "perks" classes
        // are extending this so the super.viewMembership() in theirs is returning
        // this one I believe
        // I will need to fix this later if it does not behave as expected
        return "Basic Membership";
    }
}
