package ensf480.ucalgary.group12.UserPackage;

import ensf480.ucalgary.group12.TransactionPackage.*;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.jdbc.core.JdbcTemplate;
//import org.springframework.stereotype.Component;
import java.util.Objects;
import jakarta.persistence.*;

@Entity
@Table(name = "Customer")
public class Customer extends User{
    /* 
    private Membership MembershipStatus;
    private Transaction[] CustomerTransactions;
    private String CustomerID;
    private String firstName;
    private String lastName;
    private String creditCardNum;
    private BrowseStrategy browseStrategy = new CustomerPermission();
    private String email;
*/

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int customerID;

    @Column(name = "FirstName")
    private String firstName;
    @Column(name = "LastName")
    private String lastName;
    // @OneToOne
    // @JoinColumn(name = "Email")
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

    @Transient
    Membership MembershipStatus;
    @Transient
    Transaction[] CustomerTransactions;

    @Transient
    BrowseStrategy browseStrategy = new CustomerPermission();

//    private final JdbcTemplate jdbcTemplate;

    //@Autowired
    public Customer(){
    }

    public Customer(String firstName, String lastName, boolean isMember, String address, Membership MembershipStatus, Transaction[]CustomerTransactions){
        this.firstName = firstName;
        this.lastName = lastName;
        this.isMember = isMember;
        this.address = address;
        this.MembershipStatus = MembershipStatus;
        this.CustomerTransactions = CustomerTransactions;
        // may need adjusting for what has to be initialized
    }

    public void createTransaction(){

    }
    
    public void cancelTransaction(){

    }

    public void modifyTranscation(){

    }


/* 
    // MEMBER STUFF
    // supposed to update the isMember for that customer to be true/false
    // same rough idea for all the perks below
    // not tested yet
    public String signUpForMembership(){
        setMembershipStatus(new BasicMembership());
        updateIsMemberInDatabase(true);
        String notice = "Successfully signed up for membership";
        return notice;
    }

    public String cancelMembership(){
        setMembershipStatus(null);
        updateIsMemberInDatabase(false);
        String notice = "Cancelling membership";
        return notice;
    }


    private void updateIsMemberInDatabase(boolean flag){
        String updateQuery = "UPDATE Customer SET isMember = ? WHERE ID = ?";
        jdbcTemplate.update(updateQuery, flag, getCustomerID());
    }

    // how are we generating the companycredit card numbers? 
    // 
    public void applyCompanyCreditCard(){

    }

    // AIRPORT LOUNGE STUFF
    public String applyAirportLoungeDiscount(){
        updateAirportLoungeInDatabase(true);
        String notice = "Successfully opted into Airport Lounge Discount!";
        return notice;
    }

    public String cancelAirportLoungeDiscount(){
        updateAirportLoungeInDatabase(false);
        String notice = "Successfully opted out of Airport Lounge Discount";
        return notice;
    }
    private void updateAirportLoungeInDatabase(boolean loudisc){
        String updateQuery = "UPDATE Customer SET loungeDiscount = ? WHERE ID = ?";
        jdbcTemplate.update(updateQuery, loudisc, getCustomerID());
    }


    // COMPANION TICKET STUFF
    public String addCompanionTicket(){
        updateCompanionTicketInDatabase(true);
        String notice = "Successfully signed up for companion ticket";
        return notice;
    }
    public String removeCompanionTicket(){
        updateCompanionTicketInDatabase(false);
        String notice = "Successfully opted out of companion ticket";
        return notice;
    }
    private void updateCompanionTicketInDatabase(boolean flag){
        String updateQuery = "UPDATE Customer SET companionTicket = ? WHERE ID = ?";
        jdbcTemplate.update(updateQuery, flag, getCustomerID());
    }


    public String viewMembership(){
        return "temp";
        // working on it
    }

    // MONTHLY EMAIL STUFF
    public String receiveMonthlyEmail(){
        updateMonthlyEmailsInDatabase(true);
        String notice = "Successfully opted into monthly emails!";
        return notice;
    }
    public String cancelReceiveMonthlyEmails() {
        updateMonthlyEmailsInDatabase(false);
        String notice = "Successfully opted out of monthly emails!";
        return notice;
    }

    private void updateMonthlyEmailsInDatabase(boolean receiveMonthlyEmails) {
        String updateQuery = "UPDATE Customer SET monthlyEmails = ? WHERE ID = ?";
        jdbcTemplate.update(updateQuery, receiveMonthlyEmails, getCustomerID()); 
    }

    */

    public String viewMembership(){
        String ret = "";
        if(isMember == false){
            ret = "Not a Member";
            return ret;
        }
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

    public Transaction[] getCustomerTransactions() {
        return CustomerTransactions;
    }

    public void setCustomerTransactions(Transaction[] customerTransactions) {
        CustomerTransactions = customerTransactions;
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
