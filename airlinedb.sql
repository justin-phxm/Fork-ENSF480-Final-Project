CREATE DATABASE IF NOT EXISTS AIRLINEDB;
USE AIRLINEDB;

CREATE TABLE IF NOT EXISTS Passengers (
    PassengerID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Flights (
    FlightID INT PRIMARY KEY AUTO_INCREMENT,
    FlightNumber VARCHAR(20),
    DepartureAirport VARCHAR(3),
    ArrivalAirport VARCHAR(3),
    DepartureTime DATETIME,
    ArrivalTime DATETIME
);

CREATE TABLE IF NOT EXISTS Reservations (
    ReservationID INT PRIMARY KEY AUTO_INCREMENT,
    PassengerID INT,
    FlightID INT,
    ReservationDate DATETIME,
    FOREIGN KEY (PassengerID) REFERENCES Passengers(PassengerID),
    FOREIGN KEY (FlightID) REFERENCES Flights(FlightID)
);

INSERT INTO Passengers (FirstName, LastName, Email)
VALUES
    ('John', 'Doe', 'john.doe@email.com'),
    ('Jane', 'Smith', 'jane.smith@email.com');

INSERT INTO Flights (FlightNumber, DepartureAirport, ArrivalAirport, DepartureTime, ArrivalTime)
VALUES
    ('FL001', 'JFK', 'LAX', '2023-11-19 08:00:00', '2023-11-19 12:00:00'),
    ('FL002', 'LAX', 'JFK', '2023-11-20 14:00:00', '2023-11-20 18:00:00');
    
    