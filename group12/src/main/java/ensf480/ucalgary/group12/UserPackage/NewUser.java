package ensf480.ucalgary.group12.UserPackage;

import ensf480.ucalgary.group12.CustomerPackage.CustomerPermission;

public class NewUser extends User{
    private BrowseStrategy browseStyle = new CustomerPermission();
    
}
