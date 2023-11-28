package ensf480.ucalgary.group12.TransactionPackage;

import ensf480.ucalgary.group12.TransactionPackage.Transaction;
import ensf480.ucalgary.group12.TransactionPackage.Transaction;
import ensf480.ucalgary.group12.TransactionPackage.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {

    private final TransactionRepository repo;
    
    @Autowired
    public TransactionService(TransactionRepository r){
        this.repo = r;
    }

    public List<Transaction> getTransactionsByCustomerID(int cid){
        return repo.findByCustomerID(cid);
    }
}
