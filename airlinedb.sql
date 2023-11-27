DROP DATABASE IF EXISTS AIRLINEDB;
CREATE DATABASE AIRLINEDB;
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

DROP TABLE IF EXISTS Aircrafts;
CREATE TABLE Aircrafts (
	AircraftID INT PRIMARY KEY AUTO_INCREMENT,
    AircraftName VARCHAR(10)
);

DROP TABLE IF EXISTS Flights;
CREATE TABLE Flights (
    FlightID INT PRIMARY KEY AUTO_INCREMENT,
    DepartureAirport VARCHAR(3),
    ArrivalAirport VARCHAR(3),
    DepartureTime DATETIME,
    ArrivalTime DATETIME,
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
    AircraftID INT,
    FOREIGN KEY (AircraftID) REFERENCES Aircrafts(AircraftID) ON DELETE CASCADE 	ON UPDATE CASCADE
);

INSERT INTO Customer (FirstName, LastName, Email, isMember, Address)
VALUES
    ('John', 'Doe', 'john.doe@email.com', FALSE, '123 Street'),
    ('Jane', 'Smith', 'jane.smith@email.com', TRUE, 'Sesame Street');
    
INSERT INTO Employee (FirstName, LastName, EmployeeRole)
VALUES
    ('Ryan', 'Gosling', 'Admin'),
    ('Brad', 'Pitt', 'Crew'),
    ('Barack', 'Obama', 'Agent');

INSERT INTO Aircrafts (AircraftName)
	VALUES
    ('Boeing747'),
    ('Boeing727');

INSERT INTO Flights (DepartureAirport, ArrivalAirport, DepartureTime, ArrivalTime, AircraftID)
VALUES
    ('JFK', 'LAX', '2023-11-19 08:00:00', '2023-11-19 12:00:00', 1),
    ('LAX', 'JFK', '2023-11-20 14:00:00', '2023-11-20 18:00:00', 2);
    
INSERT INTO Seats (SeatsID, Availability, SeatType, SeatNumber, AircraftID)
	VALUES
(NULL, true, 'Business', 'A1', 1),
(NULL, true, 'Business', 'A2', 1),
(NULL, true, 'Business', 'A3', 1),
(NULL, true, 'Business', 'A4', 1),
(NULL, true, 'Business', 'A5', 1),
(NULL, true, 'Business', 'A6', 1),
(NULL, true, 'Business', 'A7', 1),
(NULL, true, 'Business', 'A8', 1),
(NULL, true, 'Business', 'A9', 1),
(NULL, true, 'Business', 'A10', 1),
(NULL, true, 'Business', 'A11', 1),
(NULL, true, 'Business', 'A12', 1),
(NULL, true, 'Comfort', 'B1', 1),
(NULL, true, 'Comfort', 'B2', 1),
(NULL, true, 'Comfort', 'B3', 1),
(NULL, true, 'Comfort', 'B4', 1),
(NULL, true, 'Comfort', 'B5', 1),
(NULL, true, 'Comfort', 'B6', 1),
(NULL, true, 'Comfort', 'B7', 1),
(NULL, true, 'Comfort', 'B8', 1),
(NULL, true, 'Comfort', 'B9', 1),
(NULL, true, 'Comfort', 'B10', 1),
(NULL, true, 'Ordinary', 'C1', 1),
(NULL, true, 'Ordinary', 'C2', 1),
(NULL, true, 'Ordinary', 'C3', 1),
(NULL, true, 'Ordinary', 'C4', 1),
(NULL, true, 'Ordinary', 'C5', 1),
(NULL, true, 'Ordinary', 'C6', 1),
(NULL, true, 'Ordinary', 'C7', 1),
(NULL, true, 'Ordinary', 'C8', 1),
(NULL, true, 'Ordinary', 'C9', 1),
(NULL, true, 'Ordinary', 'C10', 1),
-- Add more rows as needed...
(NULL, true, 'Ordinary', 'D1', 1),
(NULL, true, 'Ordinary', 'D2', 1),
(NULL, true, 'Ordinary', 'D3', 1),
(NULL, true, 'Ordinary', 'D4', 1),
(NULL, true, 'Ordinary', 'D5', 1),
(NULL, true, 'Ordinary', 'D6', 1),
(NULL, true, 'Ordinary', 'D7', 1),
(NULL, true, 'Ordinary', 'D8', 1),
(NULL, true, 'Ordinary', 'D9', 1),
(NULL, true, 'Ordinary', 'D10', 1);
-- Add more rows as needed...