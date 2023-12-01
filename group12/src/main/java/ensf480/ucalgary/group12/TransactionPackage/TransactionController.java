package ensf480.ucalgary.group12.TransactionPackage;

import ensf480.ucalgary.group12.Seat.SeatService;
import ensf480.ucalgary.group12.Seat.Seat;
import ensf480.ucalgary.group12.FlightPackage.FlightService;
import ensf480.ucalgary.group12.CustomerPackage.CustomerService;
import ensf480.ucalgary.group12.CustomerPackage.Customer;
import ensf480.ucalgary.group12.FlightPackage.Flight;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.beans.Transient;
import java.util.List;

@RestController
@RequestMapping(path = "/transactions")
@CrossOrigin(origins = "*")
public class TransactionController {

    private final TransactionService service;
    private final FlightService fservice;
    private final SeatService sservice;
    private final CustomerService cservice;

    @Autowired
    public TransactionController(TransactionService s, SeatService ss, FlightService sss, CustomerService ssss) {
        this.service = s;
        this.sservice = ss;
        this.fservice = sss;
        this.cservice = ssss;
    }

    @GetMapping("/getTransactionsByE/{id}")
    public List<Transaction> getTransactionsByE(@PathVariable("id") String e) {
        return service.getTransactionsByEmail(e);
    }

    @PostMapping("/addTransaction/{airid}/{insure}/{stype}")
    public Transaction addTransaction(@RequestBody Transaction tc, @PathVariable int airid, @PathVariable int insure, @PathVariable int stype){
        Seat seat = sservice.findSeatByCodeAndID(tc.getSeatCode(), airid);
        Flight flight = fservice.getFlightById(tc.getFlightID());
        Customer cust =  cservice.getCustomerByE(tc.getEmail());
        Ticket curr = tc.getTicket();
        tc.setPrice(tc.calculateTotal(insure, stype));

        if (!seat.getAvailability()){
            return null;
        }
        System.out.println(flight.getFlightID());
        System.out.println(tc.getFlightID());
        cust.setOnflight(tc.getFlightID());
        cservice.addCustomer(cust);
        seat.setAvailability(false);
        sservice.updateSeat(seat);
        curr.setSeatNumber(tc.getSeatCode());
        curr.setPlaneID(airid);
        curr.setDestination(flight.getArrivalCity());
        curr.setOrigin(flight.getDepartureCity());
        return service.saveTransaction(tc);
    }

    @DeleteMapping("cancelTicket/{id}")
    public void deleteTransaction(@PathVariable int id){
        Transaction t = service.getTransactionByID(id);
        if (t == null){
            return;
        }
        Customer cust =  cservice.getCustomerByE(t.getEmail());
        cust.setOnflight(0);
        Seat seat = sservice.findSeatByCodeAndID(t.getSeatCode(), t.getPlane());
        seat.setAvailability(true);  
        sservice.updateSeat(seat);
        cservice.addCustomer(cust);
        service.cancelTicket(id);
    }
}
