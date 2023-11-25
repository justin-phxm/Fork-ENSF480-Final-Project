package ensf480.ucalgary.group12.UserPackage;

public abstract class User{
    protected BrowseStrategy browseStyle;
    
    public void performBrowseStrategy(){
        browseStyle.browse();
    };
}
