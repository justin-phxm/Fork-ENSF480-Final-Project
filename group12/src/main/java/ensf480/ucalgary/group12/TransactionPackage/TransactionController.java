package ensf480.ucalgary.group12.TransactionPackage;

import ensf480.ucalgary.group12.Seat.SeatService;
import ensf480.ucalgary.group12.Seat.Seat;
import ensf480.ucalgary.group12.TransactionPackage.Transaction;
import ensf480.ucalgary.group12.TransactionPackage.Transaction;
import ensf480.ucalgary.group12.TransactionPackage.TransactionService;
import ensf480.ucalgary.group12.FlightPackage.FlightService;
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

    @Autowired
    public TransactionController(TransactionService s, SeatService ss, FlightService sss) {
        this.service = s;
        this.sservice = ss;
        this.fservice = sss;
    }

    @GetMapping("/getTransactionsByC/{id}")
    public List<Transaction> getTransactionsByC(@PathVariable("id") int cid) {
        return service.getTransactionsByCustomerID(cid);
    }

    @PostMapping("/addTransaction/{airid}/{insure}/{stype}")
    public Transaction addTransaction(@RequestBody Transaction tc, @PathVariable int airid, @PathVariable int insure, @PathVariable int stype){
        Seat seat = sservice.findSeatByCodeAndID(tc.getSeatCode(), airid);
        Flight flight = fservice.getFlightById(tc.getFlightID());
        Ticket curr = tc.getTicket();
        
        tc.setPrice(tc.calculateTotal(insure, stype));
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
        Seat seat = sservice.findSeatByCodeAndID(t.getSeatCode(), t.getPlane());
        seat.setAvailability(true);
        System.out.println(t.getiD());
        System.out.println(t.getSeatCode());        
        sservice.updateSeat(seat);
        service.cancelTicket(id);
    }
}
