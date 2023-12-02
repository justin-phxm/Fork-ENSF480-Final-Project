package ensf480.ucalgary.group12.TransactionPackage;


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

    public Transaction getTransactionByID(int id){
        return repo.findByID(id);
    }

    public List<Transaction> getTransactionsByEmail(String e){
        return repo.findByEmail(e);
    }

    public Transaction saveTransaction(Transaction tc){
       return repo.save(tc);
    }

    public void cancelTicket(int id){
        repo.deleteById(id);
    }
}
