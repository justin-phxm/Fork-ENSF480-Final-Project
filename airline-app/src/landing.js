import { useEffect, useRef, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Offcanvas from "react-bootstrap/Offcanvas";
import DatePicker from "react-datepicker";
import "./landing.css";

function Landing() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedDate, setSelectedDate] = useState(Date.now());

  return (
    <div>
      <div id="topbar">
        <h1 id="title">Airline</h1>
        <Button variant="primary" onClick={handleShow} id="signin">
          Sign In
        </Button>

        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Sign In</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p>Welcome!</p>
            <input id="user"></input>
            <input id="pass"></input>
            <Button variant="primary">Login</Button>{" "}
            <p>
              If you do not have an account, create <a href="">one</a>
            </p>
            <a href="">Forgot your password?</a>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <div id="body">
        <h1 id="slogan">Slogan</h1>
      </div>
      <div id="navigatebar">
        <DropdownButton id="dropdown-basic-button" title="Origin">
          <Dropdown.Item>Repeat for all flights</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Destination">
          <Dropdown.Item>Repeat for all flights</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Departure">
          <input
            className="edit-button date"
            type="datetime-local"
            defaultValue={selectedDate}
          />
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Arrival">
          <input
            className="edit-button date"
            type="datetime-local"
            defaultValue={selectedDate}
          />
        </DropdownButton>
        <Button variant="primary">Search</Button>{" "}
      </div>
    </div>
  );
}

export default Landing;
