package ensf480.ucalgary.group12.MemberPackage;

//import ensf480.ucalgary.group12.MemberPackage.MembershipDecorator;

public class AirportLoungeDiscount extends MembershipDecorator{
    public AirportLoungeDiscount(Membership membership){
        super(membership);
    }

    @Override
    public String viewMembership(){
        String ret1 = super.viewMembership();
        String ret2 = " + Airport Lounge Discount";
        return ret1 + ret2;
    }
}
