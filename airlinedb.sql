DROP DATABASE IF EXISTS AIRLINEDB;
CREATE DATABASE AIRLINEDB;
USE AIRLINEDB;

DROP TABLE IF EXISTS User;
CREATE TABLE User (
    -- ID INT PRIMARY KEY AUTO_INCREMENT,
    Email VARCHAR(100) PRIMARY KEY,
    BrowseStyle ENUM("Customer", "Employee", "Admin") NOT NULL
);

DROP TABLE IF EXISTS Customer;
CREATE TABLE Customer (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    isMember BOOLEAN,
    creditCard VARCHAR(16),
    companionTicket BOOLEAN,
    monthlyEmails BOOLEAN, 
    loungeDiscount BOOLEAN,
    Address VARCHAR(20),
    Onflight INT
 );

DROP TABLE IF EXISTS Employee;
CREATE TABLE Employee (
	ID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    EmployeeRole VARCHAR(20),
    Email VARCHAR(100)
);

DROP TABLE IF EXISTS Admin;
CREATE TABLE Admin (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    FOREIGN KEY (Email) REFERENCES User(Email) ON DELETE CASCADE 	ON UPDATE CASCADE
);

DROP TABLE IF EXISTS Aircrafts;
CREATE TABLE Aircrafts (
	AircraftID INT PRIMARY KEY AUTO_INCREMENT,
    AircraftName VARCHAR(20)
);

DROP TABLE IF EXISTS Flights;
CREATE TABLE Flights (
    FlightID INT PRIMARY KEY AUTO_INCREMENT,
    DepartureAirport VARCHAR(3),
    ArrivalAirport VARCHAR(3),
    DepartureTime DATETIME,
    ArrivalTime DATETIME,
    ArrivalCity VARCHAR(20),
    DepartureCity VARCHAR(20),
    AircraftID INT,
    FOREIGN KEY (AircraftID) REFERENCES Aircrafts(AircraftID) ON DELETE CASCADE 	ON UPDATE CASCADE
);

DROP TABLE IF EXISTS Seats;
CREATE TABLE Seats (
    -- Why do we have ID and SeatsID? --
	ID INT PRIMARY KEY AUTO_INCREMENT,
	SeatsID INT,
    Availability BOOLEAN,
    SeatType ENUM('Ordinary', 'Comfort', 'Business') NOT NULL,
    -- SeatCode is an uppercase letter followed by a number--
    SeatCode VARCHAR(3),
    Plane INT,
    FOREIGN KEY (Plane) REFERENCES Aircrafts(AircraftID) ON DELETE CASCADE 	ON UPDATE CASCADE
);

DROP TABLE IF EXISTS Ticket;
CREATE TABLE Ticket (
	ID INT PRIMARY KEY AUTO_INCREMENT,
	SeatNumber VARCHAR(3),
	Destination VARCHAR(20),
	Origin VARCHAR(20),
	PlaneID INT
);

DROP TABLE IF EXISTS Transactions;
CREATE TABLE Transactions (
	ID INT PRIMARY KEY AUTO_INCREMENT,
    Email VARCHAR(100),
    FlightID INT,
    SeatCode VARCHAR(3),
    Aircraft INT,
    TicketID INT,
    Price DOUBLE,
    FOREIGN KEY (FlightID) REFERENCES Flights(FlightID),
    FOREIGN KEY (TicketID) REFERENCES Ticket(ID)
);

INSERT INTO User (Email, BrowseStyle)
VALUES
    ('justin.phamx4@gmail.com', 'Admin'),
    ('john.doe@email.com', 'Customer'),
    ('jane.smith@email.com', 'Customer'),
    ('ryan.gosling@gmail.com', 'Employee'),
    ('Brad.pitt@gmail.com', 'Employee'),
    ('BarackObama@gmail.com', 'Employee');


INSERT INTO Admin (FirstName, LastName, Email)
VALUES
    ('Justin', 'Pham', 'justin.phamx4@gmail.com');


INSERT INTO Customer (FirstName, LastName, Email, isMember, creditCard, companionTicket, monthlyEmails, loungeDiscount, Address, Onflight)
VALUES
    ('John', 'Doe', 'john.doe@email.com', FALSE, NULL, FALSE, FALSE, FALSE, '123 Street', 0),
    ('Jane', 'Smith', 'jane.smith@email.com', TRUE, '1234567890123456', TRUE, FALSE, TRUE, 'Sesame Street', 0);
    
INSERT INTO Employee (FirstName, LastName, EmployeeRole, Email)
VALUES
    ('Ryan', 'Gosling', 'Crew',"ryan.gosling@gmail.com"),
    ('Brad', 'Pitt', 'Crew', "Brad.pitt@gmail.com"),
    ('Justin', 'Pham', 'Admin', "justin.phamx4@gmail.com"),
    ('Barack', 'Obama', 'Agent',"BarackObama@gmail.com");

INSERT INTO Aircrafts (AircraftName)
	VALUES
    ('Boeing747'),
    ('Boeing727'),
    ('AirbusA320'),
    ('AirbusA330'),
    ('EmbraerE190'),
    ('Boeing777'),
    ('AirbusA380'),
    ('BombardierCRJ700'),
    ('Boeing737'),
    ('EmbraerE145'),
    ('AirbusA350'),
    ('AirbusZ150');

INSERT INTO Flights (DepartureCity, ArrivalCity, DepartureAirport, ArrivalAirport, DepartureTime, ArrivalTime, AircraftID)
VALUES
    ('New York', 'Los Angeles', 'JFK', 'LAX', '2023-11-19 08:00:00', '2023-11-19 12:00:00', 1),
    ('Los Angeles', 'New York', 'LAX', 'JFK', '2023-11-20 14:00:00', '2023-11-20 18:00:00', 2),
    ('Chicago', 'Miami', 'ORD', 'MIA', '2023-11-21 10:00:00', '2023-11-21 14:00:00', 3),
    ('Miami', 'Chicago', 'MIA', 'ORD', '2023-11-22 16:00:00', '2023-11-22 20:00:00', 4),
    ('Seattle', 'San Francisco', 'SEA', 'SFO', '2023-11-23 12:00:00', '2023-11-23 16:00:00', 5),
    ('Denver', 'Dallas', 'DEN', 'DFW', '2023-11-24 09:00:00', '2023-11-24 13:00:00', 6),
    ('Dallas', 'Denver', 'DFW', 'DEN', '2023-11-25 15:00:00', '2023-11-25 19:00:00', 7),
    ('Atlanta', 'Orlando', 'ATL', 'MCO', '2023-11-26 11:00:00', '2023-11-26 15:00:00', 8),
    ('Orlando', 'Atlanta', 'MCO', 'ATL', '2023-11-27 17:00:00', '2023-11-27 21:00:00', 9),
    -- Add more flights as needed
    ('Houston', 'Phoenix', 'IAH', 'PHX', '2023-11-28 13:00:00', '2023-11-28 17:00:00', 10),
    ('Phoenix', 'Houston', 'PHX', 'IAH', '2023-11-29 19:00:00', '2023-11-29 23:00:00', 11),
    ('New York', 'Houston', 'JFK', 'IAH', '2023-11-19 08:00:00', '2023-11-19 12:00:00', 12);

INSERT INTO Seats (SeatsID, Availability, SeatType, SeatCode, Plane)
	VALUES
(1, true, 'Business', 'A1', 1),
(1, true, 'Business', 'B1', 1),
(1, true, 'Business', 'C1', 1),
(1, true, 'Business', 'D1', 1),
(1, true, 'Business', 'A2', 1),
(1, true, 'Business', 'B2', 1),
(1, true, 'Business', 'C2', 1),
(1, true, 'Business', 'D2', 1),
(1, true, 'Business', 'A3', 1),
(1, true, 'Business', 'B3', 1),
(1, true, 'Business', 'C3', 1),
(1, true, 'Business', 'D3', 1),
(1, true, 'Comfort', 'A4', 1),
(1, true, 'Comfort', 'B4', 1),
(1, true, 'Comfort', 'C4', 1),
(1, true, 'Comfort', 'D4', 1),
(1, true, 'Comfort', 'E4', 1),
(1, true, 'Comfort', 'F4', 1),
(1, true, 'Comfort', 'A5', 1),
(1, true, 'Comfort', 'B5', 1),
(1, true, 'Comfort', 'C5', 1),
(1, true, 'Comfort', 'D5', 1),
(1, true, 'Comfort', 'E5', 1),
(1, true, 'Comfort', 'F5', 1),
(1, true, 'Ordinary', 'A6', 1),
(1, true, 'Ordinary', 'B6', 1),
(1, true, 'Ordinary', 'C6', 1),
(1, true, 'Ordinary', 'D6', 1),
(1, true, 'Ordinary', 'E6', 1),
(1, true, 'Ordinary', 'F6', 1),
(1, true, 'Ordinary', 'A7', 1),
(1, true, 'Ordinary', 'B7', 1),
(1, true, 'Ordinary', 'C7', 1),
(1, true, 'Ordinary', 'D7', 1),
(1, true, 'Ordinary', 'E7', 1),
(1, true, 'Ordinary', 'F7', 1),
-- Add more rows as needed...
(1, true, 'Ordinary', 'A8', 1),
(1, true, 'Ordinary', 'B8', 1),
(1, true, 'Ordinary', 'C8', 1),
(1, true, 'Ordinary', 'D8', 1),
(1, true, 'Ordinary', 'E8', 1),
(1, true, 'Ordinary', 'F8', 1),
(1, true, 'Ordinary', 'A9', 1),
(1, true, 'Ordinary', 'B9', 1),
(1, true, 'Ordinary', 'C9', 1),
(1, true, 'Ordinary', 'D9', 1),
(1, true, 'Ordinary', 'E9', 1),
(1, true, 'Ordinary', 'F9', 1),
-- Add more rows as needed...
(2, true, 'Business', 'A1', 1),
(2, true, 'Business', 'A2', 1),
(2, true, 'Business', 'A3', 1),
(2, true, 'Business', 'A4', 1),
(2, true, 'Business', 'A5', 1),
(2, true, 'Business', 'A6', 1),
(2, true, 'Business', 'A7', 1),
(2, true, 'Business', 'A8', 1),
(2, true, 'Business', 'A9', 1),
(2, true, 'Business', 'A10', 1),
(2, true, 'Business', 'A11', 1),
(2, true, 'Business', 'A12', 1),
(2, true, 'Comfort', 'B1', 1),
(2, true, 'Comfort', 'B2', 1),
(2, true, 'Comfort', 'B3', 1),
(2, true, 'Comfort', 'B4', 1),
(2, true, 'Comfort', 'B5', 1),
(2, true, 'Comfort', 'B6', 1),
(2, true, 'Comfort', 'B7', 1),
(2, true, 'Comfort', 'B8', 1),
(2, true, 'Comfort', 'B9', 1),
(2, true, 'Comfort', 'B10', 1),
(2, true, 'Ordinary', 'C1', 1),
(2, true, 'Ordinary', 'C2', 1),
(2, true, 'Ordinary', 'C3', 1),
(2, true, 'Ordinary', 'C4', 1),
(2, true, 'Ordinary', 'C5', 1),
(2, true, 'Ordinary', 'C6', 1),
(2, true, 'Ordinary', 'C7', 1),
(2, true, 'Ordinary', 'C8', 1),
(2, true, 'Ordinary', 'C9', 1),
(2, true, 'Ordinary', 'C10', 1),
-- Add more rows as needed...
(2, true, 'Ordinary', 'D1', 1),
(2, true, 'Ordinary', 'D2', 1),
(2, true, 'Ordinary', 'D3', 1),
(2, true, 'Ordinary', 'D4', 1),
(2, true, 'Ordinary', 'D5', 1),
(2, true, 'Ordinary', 'D6', 1),
(2, true, 'Ordinary', 'D7', 1),
(2, true, 'Ordinary', 'D8', 1),
(2, true, 'Ordinary', 'D9', 1),
(2, true, 'Ordinary', 'D10', 1),
-- Add more rows as needed...
(3, true, 'Business', 'A1', 1),
(4, true, 'Business', 'A2', 1),
(5, true, 'Business', 'A1', 1),
(6, true, 'Business', 'A2', 1),
(7, true, 'Business', 'A1', 1),
(8, true, 'Business', 'A2', 1),
(9, true, 'Business', 'A1', 1),
(10, true, 'Business', 'A2', 1),
(11, true, 'Business', 'A1', 1),
(11, true, 'Business', 'A2', 1),
(11, true, 'Business', 'A3', 1),
(11, true, 'Business', 'A4', 1);