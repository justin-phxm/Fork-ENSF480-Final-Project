package ensf480.ucalgary.group12.CustomerPackage;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer>{

    public Customer findByCustomerID(int ID);
    public Customer findByEmail(String email);
    public List<Customer> findByOnflight(int id);
}