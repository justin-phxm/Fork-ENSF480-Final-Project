package ensf480.ucalgary.group12.TransactionPackage;

import ensf480.ucalgary.group12.TransactionPackage.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer>{
    public List<Transaction> findByEmail(String e);
    public Transaction findByID(int id);
}
