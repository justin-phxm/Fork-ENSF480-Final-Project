package ensf480.ucalgary.group12.UserPackage;

import org.springframework.jdbc.core.JdbcTemplate;


public class AirlineAgent extends Customer {
    
    private BrowseStrategy browseStyle;

    public AirlineAgent(JdbcTemplate jdbcTemplate) {
        super(jdbcTemplate);
    }

    public void performBrowseStrategy(){
    }
}
