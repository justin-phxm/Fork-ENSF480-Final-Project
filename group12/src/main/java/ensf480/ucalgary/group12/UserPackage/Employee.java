package ensf480.ucalgary.group12.UserPackage;
import java.util.Objects;
import jakarta.persistence.*;

@Entity
@Table(name = "Employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int iD;

    @Column(name = "FirstName")
    private String firstName;

    @Column(name = "LastName")
    private String lastName;

    @Column(name = "EmployeeRole")
    private String employeeRole;

    @Column(name = "Email")
    private String email;


    public Employee() {
    }

    public Employee(String firstName, String lastName, String employeeRole, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeRole = employeeRole;
        this.email = email;
    }

    public int getId() {
        return iD;
    }

    public void setId(int id) {
        this.iD = id;
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

    public String getEmployeeRole() {
        return this.employeeRole;
    }

    public void setEmployeeRole(String employeeRole) {
        this.employeeRole = employeeRole;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
