package ensf480.ucalgary.group12.TransactionPackage;

import ensf480.ucalgary.group12.TransactionPackage.Transaction;
import ensf480.ucalgary.group12.TransactionPackage.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/transactions")
@CrossOrigin(origins = "*")
public class TransactionController {

    private final TransactionService service;

    @Autowired
    public TransactionController(TransactionService s) {
        this.service = s;
    }

    @GetMapping("/getTransactionsByC/{id}")
    public List<Transaction> getTransactionsByC(@PathVariable("id") int cid) {
        return service.getTransactionsByCustomerID(cid);
    }
}
