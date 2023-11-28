package ensf480.ucalgary.group12.UserPackage;

import org.springframework.jdbc.core.JdbcTemplate;

public class TourismAgent extends Customer {
    public TourismAgent(JdbcTemplate jdbcTemplate) {
        super(jdbcTemplate);
    }
}
