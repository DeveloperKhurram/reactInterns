import { useState } from "react";
import "./smallSidebar.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { allFilter } from "../images/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";
import { SidebarHeading, SidebarItem, SearchBox } from "../elements/index";
import Accordion from "react-bootstrap/Accordion";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const SmallSideBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Button
            variant="primary"
            className="d-lg-none offcanvas-btn"
            onClick={handleShow}
          >
            <img src={allFilter} alt="" />
            <span>All Filter</span>
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header>
          <Offcanvas.Title>
            <div className="body-heading d-flex align-items-center justify-content-sm-between">
              <h3>All Filters</h3>
              <a onClick={handleClose}>
                <FontAwesomeIcon icon={faClose} className="faClose" />
              </a>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="data-group overflow-y-scroll">
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <SidebarHeading heading={"Skills"} />
                </Accordion.Header>
                <Accordion.Body>
                  <SearchBox name={"Skills"} />
                  <SidebarItem item={"UX Designer"} number={"1945"} />
                  <SidebarItem item={"UX Designer"} number={"1945"} />
                  <SidebarItem item={"UX Designer"} number={"1945"} />
                  <SidebarItem item={"UX Designer"} number={"1945"} />
                  <SidebarItem item={"UX Designer"} number={"1945"} />
                </Accordion.Body>
              </Accordion.Item>
              <hr />
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <SidebarHeading heading={"Cities"} />
                </Accordion.Header>
                <Accordion.Body>
                  <SearchBox name={"Cities"} />
                  <SidebarItem item={"Karachi"} number={"1945"} />
                  <SidebarItem item={"Lahore"} number={"1945"} />
                  <SidebarItem item={"Islamabad"} number={"1945"} />
                  <SidebarItem item={"Rawalpindi"} number={"1945"} />
                  <SidebarItem item={"Faisalabad"} number={"1945"} />
                </Accordion.Body>
              </Accordion.Item>
              <hr />
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <SidebarHeading heading={"Languages"} />
                </Accordion.Header>
                <Accordion.Body>
                  <SidebarItem item={"English"} number={"1945"} />
                  <SidebarItem item={"Urdu"} number={"1945"} />
                  <SidebarItem item={"French"} number={"1945"} />
                  <SidebarItem item={"Others"} number={"1945"} />
                </Accordion.Body>
              </Accordion.Item>
              <hr />
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <SidebarHeading heading={"Level"} />
                </Accordion.Header>
                <Accordion.Body>
                  <SidebarItem item={"Recommended"} number={"1945"} />
                  <SidebarItem item={"Top Rated"} number={"1945"} />
                  <SidebarItem item={"Level Two"} number={"1945"} />
                  <SidebarItem item={"Level One"} number={"1945"} />
                  <SidebarItem item={"Newbies"} number={"1945"} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SmallSideBar;
