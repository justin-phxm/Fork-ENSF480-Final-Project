package ensf480.ucalgary.group12.PaymentPackage;

public interface PaymentStrategy {
    abstract String pay();
    abstract boolean validate();
} 
