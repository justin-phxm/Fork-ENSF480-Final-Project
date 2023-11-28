package ensf480.ucalgary.group12.UserPackage;

import ensf480.ucalgary.group12.TransactionPackage.Transaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import java.util.Objects;

@Component
public class Customer extends User{
    private Membership MembershipStatus;
    private Transaction[] CustomerTransactions;
    private String CustomerID;
    private String firstName;
    private String lastName;
    private String creditCardNum;
    private BrowseStrategy browseStrategy = new CustomerPermission();
    private String email;

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public Customer(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    public void createTransaction(){

    }
    
    public void cancelTransaction(){

    }

    public void modifyTranscation(){

    }

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

    public String getCustomerID() {
        return CustomerID;
    }

    public void setCustomerID(String customerID) {
        CustomerID = customerID;
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
