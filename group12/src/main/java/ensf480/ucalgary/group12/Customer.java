package ensf480.ucalgary.group12;

public class Customer {
    private Membership MembershipStatus;
    private Transaction[] CustomerTransactions;
    private String CustomerID;
    private String firstName;
    private String lastName;
    private String creditCardNum;
    private BrowseStrategy browseStrategy;
    private String email;

    public Customer(){

    }

    public void createTransaction(){

    }
    
    public void cancelTransaction(){

    }

    public void modifyTranscation(){

    }

    public void applyCompanyCreditCard(){

    }

    public void applyAirportLoungeDiscount(){

    }

    public void receiveMonthlyDiscount(){

    }

    public void viewMembership(){

    }

    public void receiveMonthlyEmail(){

    }

    public void performBrowseStrategy(){
        
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
