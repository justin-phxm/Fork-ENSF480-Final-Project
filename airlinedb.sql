CREATE DATABASE IF NOT EXISTS AIRLINEDB;
USE AIRLINEDB;

DROP TABLE IF EXISTS Customer;
CREATE TABLE Customer (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    isMember BOOLEAN,
    Address VARCHAR(20)
);

DROP TABLE IF EXISTS Employee;
CREATE TABLE Employee (
	ID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    EmployeeRole VARCHAR(20)
);

DROP TABLE IF EXISTS Flights;
CREATE TABLE Flights (
    FlightID INT PRIMARY KEY AUTO_INCREMENT,
    DepartureAirport VARCHAR(3),
    ArrivalAirport VARCHAR(3),
    DepartureTime DATETIME,
    ArrivalTime DATETIME,
    AircraftID INT
);

DROP TABLE IF EXISTS Aircraft;
CREATE TABLE Aircraft (
	AircraftID INT PRIMARY KEY,
    AircraftName VARCHAR(10),
    SeatsID INT
);

DROP TABLE IF EXISTS Seats;
CREATE TABLE Seats (
	SeatsID INT,
    Availability BOOLEAN,
    SeatType VARCHAR(20),
    Seat VARCHAR(2)
);

INSERT INTO Customer (FirstName, LastName, Email, isMember, Address)
VALUES
    ('John', 'Doe', 'john.doe@email.com', FALSE, '123 Street'),
    ('Jane', 'Smith', 'jane.smith@email.com', True, 'Sesame Street');
    
INSERT INTO Employee (FirstName, LastName, EmployeeRole)
VALUES
    ('Ryan', 'Gosling', 'Admin'),
    ('Brad', 'Pitt', 'Crew'),
    ('Barack', 'Obama', 'Agent');

INSERT INTO Flights (DepartureAirport, ArrivalAirport, DepartureTime, ArrivalTime, AircraftID)
VALUES
    ('JFK', 'LAX', '2023-11-19 08:00:00', '2023-11-19 12:00:00', 1),
    ('LAX', 'JFK', '2023-11-20 14:00:00', '2023-11-20 18:00:00', 2);

INSERT INTO Aircraft (AircraftID, AircraftName, SeatsID)
	VALUES
    (1, 'Boeing747', 1),
    (2, 'Boeing727', 2);
    
INSERT INTO Seats (SeatsID, Availability, SeatType, Seat)
	VALUES
    (1, TRUE, 'Ordinary', 'A1'),
    (1, TRUE, 'Ordinary', 'A2'),
    (1, TRUE, 'Ordinary', 'A3'),
    (1, FALSE, 'Comfort', 'A4'),
    (1, TRUE, 'Business', 'A5'),
    (2, FALSE, 'Ordinary', 'A1'),
    (2, FALSE, 'Ordinary', 'A2'),
    (2, TRUE, 'Ordinary', 'A3'),
    (2, TRUE, 'Comfort', 'A4'),
    (2, FALSE, 'Business', 'A5');
