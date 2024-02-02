
# ENSF 480 - Principles of Software Design
## Flight Reservation Web Application

![image](https://github.com/justin-phxm/Fork-ENSF480-Final-Project/assets/113923596/bfd5dc9f-cdb9-4613-8f54-b35464f5e411)

## Project Overview

Welcome to the Flight Reservation Web Application project developed by Group 12 for the ENSF 480 course. This web application is designed for use by different type of users, tourism agents, airline agents, and system admins.

---

## System Description
For a detailed description of the Flight Reservation System, please refer to the [System Description Google Doc](https://docs.google.com/document/d/1gUVZPgaqqJ3SIKTWbacnzj1G4kotSuN4hx77lC0c1o0/edit?usp=sharing).

---

## Installation

### Prerequisites

Before you begin, ensure you have the following prerequisites installed on your machine:

1. **Node.js and npm:**

   - [Download and Install Node.js](https://nodejs.org/) (version 10.2.3)
   - npm is included with Node.js, so no separate installation is required.

2. **MySQL:**

   - [Download and Install MySQL](https://www.mysql.com/) 
   - Set up a MySQL database with the necessary configurations.

3. **MySQL Workbench 8.0 CE:**

   - [Download and Install MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
   - Set up a MySQL Workbench Server connection with the necessary configurations.

4. **Java 21:**

   - [Download and Install Java 21](https://www.oracle.com/java/technologies/javase-jdk21-downloads.html) (or use an alternative distribution like OpenJDK).

5. **Maven:**

   - [Download and Install Apache Maven](https://maven.apache.org/download.cgi)
   - Set up Maven on your machine.
   - Add Maven to your PATH environment


### Instructions

Follow these steps to set up and run the Flight Reservation Web Application:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/flight-reservation-app.git
   cd flight-reservation-app```
2. **Initialize MySQL Database:**

Run the airlinedb.sql script to initialize the MySQL database.

3. **Configure Database Connection:**

Navigate to group12/src/main/resources.
Configure the application.properties file with your database username, password, and datasource URL.

4. **Build and Run the Backend**
```cd ..  # Navigate back to the root directory
mvn clean install
cd target
java -jar group12-0.0.1-SNAPSHOT.jar
```



5. **Build and Run the Frontend**
Open up a new terminal window.
```cd 480airlines
npm i
npm run build
npm run start
```

6. **Access the Application**
Open your web browser and navigate to http://localhost:3000 to access the Flight Reservation Web Application. 

---
