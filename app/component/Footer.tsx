'use client'
import React from "react";
import {Col , Container , Nav , OverlayTrigger , Row , Tooltip} from "react-bootstrap";
import { footerLinksPagesMore } from "./footerLinksPagesMore";
import { links } from "./links";
import Link from "next/link";


export const Footer = () => {
  return (
    <Container fluid className="footer-main mt-5 pt-4">
      <Row className=" justify-content-evenly CNAV text-center ">
        <Col lg={3} md={4} sm={5} xs={8}>
         <Link href={'/'} className='NB  fw-bold fs-3' >Game World</Link>
        </Col>
        <Col lg={9} md={8} sm={11}>
         <p className="text-black-50 text-start">is an ambitious and immersive gaming project that aims to create a captivating and expansive virtual universe for players to explore and interact with. This project represents a seamless fusion of cutting-edge technology, creative storytelling, and artistic design</p>

        </Col>

      </Row>
      <Row className=" nav text-start p-2  justify-content-evenly  footer-main-grand">
        <Col lg={5} md={3} sm={5} xs={8}>
          <Row className="flex mb-3" >
            <h4 className="mt-3 text-center">Folow Me:</h4>
            {links.map((e, i) => (
              <div className="folow text-center" key={i}>

              <OverlayTrigger
                key={i}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    folowing <strong>{e.name}</strong>
                  </Tooltip>
                }>
                <Nav.Link
                  
                  eventKey={`link-${i + 1}`}
                  href={e.url}
                  target="_blank"
                  className="mt-1 mb-1 drop text-black">
                  {e.classIcon}
                  {" "+e.name}
                </Nav.Link>
              </OverlayTrigger>
            </div>
            ))}
          </Row>
        </Col>
        <Col lg={1}></Col>
        <Col lg={3} md={3} sm={5} xs={9}>
          <Row className="flex-column mb-3">
            <h4 className="mt-3 mb-3 text-center">Pages:</h4>
            {footerLinksPagesMore.map((e, i) => (
              <div className="text-center mb-2" key={i}>

              <OverlayTrigger
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    Go to <strong>{e.name}</strong>
                  </Tooltip>
                }>
                <Link
                  href={e.url}
                  className="mt-2 mb-2"
                  style={{ textDecoration: "none", color: "#000000" }}
                  >
                  {e.classIcon }
                  {" " +e.name}
                </Link>
              </OverlayTrigger>
                    </div>
            ))}
            <Col lg={2}></Col>
          </Row>
        </Col>
      </Row>
      <Row className="pb-5 p-lg-5 justify-content-evenly text-center ">
        <Col
          lg={6}
          md={8}
          sm={10}
          className="d-flex justify-content-center align-items-start ">
          &copy;<p>Copyright {new Date().getFullYear()} by</p>{" "}
          <p className="ms-2" style={{ color: "" }}>
            Ahmed Ayman
          </p>
        </Col>
      </Row>
    </Container>
  );
};
