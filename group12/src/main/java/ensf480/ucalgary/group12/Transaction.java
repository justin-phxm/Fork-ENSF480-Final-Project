package ensf480.ucalgary.group12;

public class Transaction {
    private String CustomerID;
    private Ticket transactionTicket;
    private int price;

    public Transaction(){

    }
    
    public void printReciept(){

    }

    public void calculateTotal(){

    }

    public void addInsurance(){

    }

    public void modifyTicket(){

    }

    public void cancelTicket(){

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

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
