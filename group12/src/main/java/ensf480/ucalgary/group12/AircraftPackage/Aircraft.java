// package ensf480.ucalgary.group12.AircraftPackage;

// import ensf480.ucalgary.group12.Seat.Seat;
// import jakarta.persistence.*;
// import java.util.List;

// // @Entity
// // @Table(name = "Aircrafts")
// public class Aircraft {
//     // @Id
//     // @GeneratedValue(strategy = GenerationType.IDENTITY)
//     // @Column(name = "AircraftID")
//     private int aircraftID;

//     // @Column(name = "AircraftName")
//     private String name;

//     // @OneToMany(mappedBy = "aircraft")
//     // private Set<Seat> seats;

//     public Aircraft() {
//     }

//     public int getAircraftID() {
//         return aircraftID;
//     }

//     public void setAircraftID(int aircraftID) {
//         this.aircraftID = aircraftID;
//     }

//     public String getName() {
//         return name;
//     }

//     public void setName(String name) {
//         this.name = name;
//     }

//     // public List<Seat> getSeats() {
//     //     return seats;
//     // }

//     // public void setSeats(List<Seat> seats) {
//     //     this.seats = seats;
//     // }
// }
package ensf480.ucalgary.group12.AircraftPackage;

import ensf480.ucalgary.group12.Seat.Seat;

public class Aircraft {
    private Seat[] seats;
    private String name;
    private String aircraftID;

    public Aircraft(){
        
    }

    public Seat[] getSeats() {
        return seats;
    }

    public void setSeats(Seat[] seats) {
        this.seats = seats;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAircraftID() {
        return aircraftID;
    }

    public void setAircraftID(String aircraftID) {
        this.aircraftID = aircraftID;
    }
}