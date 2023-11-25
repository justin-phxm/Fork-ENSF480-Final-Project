package ensf480.ucalgary.group12.UserPackage;

public abstract class User implements BrowseStrategy{
    protected BrowseStrategy browseStyle;
    
    public void performBrowseStrategy(){
        browseStyle.browse();
    };
}
