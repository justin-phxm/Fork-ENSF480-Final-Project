package ensf480.ucalgary.group12.CrewMemberPackage;

import ensf480.ucalgary.group12.UserPackage.BrowseStrategy;
import ensf480.ucalgary.group12.UserPackage.User;

public class CrewMember extends User{
    private String firstName;
    private String lastName;
    private String employeeID;
    private BrowseStrategy browseStyle;

    public CrewMember(){

    }
    @Override
    public void performBrowseStrategy(){
        
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

    public String getEmployeeID() {
        return employeeID;
    }

    public void setEmployeeID(String employeeID) {
        this.employeeID = employeeID;
    }

    public BrowseStrategy getBrowseStyle() {
        return browseStyle;
    }

    public void setBrowseStyle(BrowseStrategy browseStyle) {
        this.browseStyle = browseStyle;
    }
}
