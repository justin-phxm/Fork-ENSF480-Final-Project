package ensf480.ucalgary.group12.UserPackage;

public class AirportLoungeDiscount extends MembershipDecorator{
    public AirportLoungeDiscount(Membership membership){
        super(membership);
    }

    @Override
    public void viewMembership(){
        super.viewMembership();
        System.out.println(" + Airport Lounge Discount");
    }
}
