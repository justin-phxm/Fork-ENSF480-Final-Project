package ensf480.ucalgary.group12;

public class Transaction {
    private String CustomerID;
    private Ticket transactionTicket;
    private double price;

    public Transaction(){

    }
    
    public String printReciept(){ 
        // system.out.print for now can change if needed
        String ret = "Successfully purchased Ticket to " + transactionTicket.getDestination() + 
        "from " + transactionTicket.getOrigin() + "seat Number " + transactionTicket.getSeatNumber() 
        + "on flight number " + transactionTicket.getFlightNumber() + "for " + String.valueOf(getPrice());
        return ret; 
    }

    public void calculateTotal(){

    }

    public void addInsurance(){
        // placeholder of an added insurance cost of 15% of ticket price
        setPrice(1.15 * price);
        // System.out.println("Insurance added for an additional cost of 15%");
    }

    public void modifyTicket(){

    }

    public void cancelTicket(){
        // cancel the ticket / flight 
    }

    public String getCustomerID() {
        return CustomerID;
    }

    public void setCustomerID(String customerID) {
        CustomerID = customerID;
    }

    public Ticket getTransactionTicket() {
        return transactionTicket;
    }

    public void setTransactionTicket(Ticket transactionTicket) {
        this.transactionTicket = transactionTicket;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
