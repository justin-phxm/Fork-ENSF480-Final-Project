package ensf480.ucalgary.group12.CustomerPackage;

import ensf480.ucalgary.group12.MemberPackage.*;
import ensf480.ucalgary.group12.UserPackage.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name = "Customer")
public class Customer extends User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int customerID;

    @Column(name = "FirstName")
    private String firstName;
    @Column(name = "LastName")
    private String lastName;
    @Column(name = "Email")
    private String email;
    @Column(name = "isMember")
    private boolean isMember;
    @Column(name = "creditCard")
    private String creditCardNum;
    @Column(name = "companionTicket")
    private boolean companionTicket;
    @Column(name = "monthlyEmails")
    private boolean monthlyEmails;
    @Column(name = "loungeDiscount")
    private boolean loungeDiscount;
    @Column(name = "Address")
    private String address;
    @Column(name = "Onflight")
    private int onflight = 0;

    public int getOnflight() {
        return onflight;
    }

    public void setOnflight(int onflight) {
        this.onflight = onflight;
    }

    @Transient
    private Membership MembershipStatus;

    @Transient
    @JsonIgnore
    private BrowseStrategy browseStrategy = new CustomerPermission();

    public Customer(){
    }

    public Customer(String firstName, String lastName, boolean isMember, String address, Membership MembershipStatus){
        this.firstName = firstName;
        this.lastName = lastName;
        this.isMember = isMember;
        this.address = address;
        this.MembershipStatus = MembershipStatus;
    }

    public String viewMembership(){
        String ret = "";
        if(isMember == false){
            ret = "Not a Member";
            return ret;
        }
        MembershipStatus = new BasicMembership();
        ret += MembershipStatus.viewMembership();
        if(companionTicket){
            MembershipStatus = new FreeCompanionTicket(MembershipStatus);
            ret += MembershipStatus.viewMembership();
        }
        if(loungeDiscount){
            MembershipStatus = new AirportLoungeDiscount(MembershipStatus);
            ret += MembershipStatus.viewMembership();
        }
        if(creditCardNum != null){
            MembershipStatus = new CompanyCreditCard(MembershipStatus);
            ret += MembershipStatus.viewMembership();
        }
        if(monthlyEmails){
            MembershipStatus = new ReceiveMonthlyEmails(MembershipStatus);
            ret += MembershipStatus.viewMembership();
        }
        if(!companionTicket && !loungeDiscount && !monthlyEmails && (creditCardNum == null)){
            return "Basic Membership";
        }

        return ret;
    }
    
    public Membership getMembershipStatus() {
        return MembershipStatus;
    }

    public void setMembershipStatus(Membership membershipStatus) {
        MembershipStatus = membershipStatus;
    }

    public int getCustomerID() {
        return customerID;
    }

    public void setCompanionTicket(boolean flag){
        this.companionTicket = flag;
    }

    public boolean getCompanionTicket(){
        return companionTicket;
    }

    public void setMonthlyEmails(boolean flag){
        this.monthlyEmails = flag;
    }

    public boolean getMonthlyEmails(){
        return monthlyEmails;
    }

    public void setLoungeDiscount(boolean flag){
        this.loungeDiscount = flag;
    }

    public boolean getLoungeDiscount(){
        return loungeDiscount;
    }

    public void setIsMember(boolean flag){
        this.isMember = flag;
    }

    public boolean getIsMember(){
        return isMember;
    }

    public void setCustomerID(int cID) {
        customerID = cID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress(){
        return address;
    }

    public void setAddress(String adr){
        this.address = adr;
    }

    public String getCreditCardNum() {
        return creditCardNum;
    }

    public void setCreditCardNum(String creditCardNum) {
        this.creditCardNum = creditCardNum;
    }

    public BrowseStrategy getBrowseStrategy() {
        return browseStrategy;
    }

    public void setBrowseStrategy(BrowseStrategy browseStrategy) {
        this.browseStrategy = browseStrategy;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
