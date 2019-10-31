import React from "react";
import "../css/Contact.css";
import { Container, Row, Col ,Image} from "react-bootstrap";
import Navbarr from "../Components/Navbarr";
import Brand from "../Components/Brand";
import Footerr from "../Components/Footerr";
import sliderhandholder from '../image/slider-hand-holding.jpg'

// font awsome react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faHandHolding } from "@fortawesome/free-solid-svg-icons";
import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from "@fortawesome/fontawesome-svg-core";
library.add(fas);
const mapMaker: IconLookup = { prefix: "fas", iconName: "map-marker" };
const MapMakerIconDefinition: IconDefinition = findIconDefinition(mapMaker);
const phoneSquare: IconLookup = { prefix: "fas", iconName: "phone-square" };
const phoneSquareIconDefinition: IconDefinition = findIconDefinition(
  phoneSquare
);
const evelop: IconLookup = { prefix: "fas", iconName: "envelope" };
const evelopIconDefinition: IconDefinition = findIconDefinition(evelop);

const CV: IconLookup = { prefix: "fas", iconName: "file-alt" };
const CVIconDefinition: IconDefinition = findIconDefinition(CV);
// end import fontawsome

// import googlemap
// end import googlemap
export default function Contact() {
 
  return (
    <Container fluid={true} className="dashboard-page">
      {/* navbar */}
      <Row className="brand-navbar" id='nav_bar'>
        <Brand />
        <Navbarr />
      </Row>
      {/* end navbar */}
      <div className="contact-slider-img">

      {/* <Image src={sliderhandholder} fluid   /> */}
      </div>
      {/* contact info  */}
      <Row className="contact-info-map mt-5">
        <Col md={6} xs={12}>
        <div className="contact-info">
          <div className="contact-info-row">
            <div className="contact-info-contactWord ">CONTACT</div>
            <div className="contact-info-contactSentence">
              Never Give Up and Learn More About <br /> Life Values Today.
            </div>
            <div className="contact-sacredfire-word">Sacred Fire</div>
            <div className="mt-5">
              <FontAwesomeIcon icon={MapMakerIconDefinition} />  109/4G, Le Van
              Khuong Street, Hiep Thanh ward, Dist 12, Ho Chi Minh City
            </div>
            <div className="mt-3">
              <FontAwesomeIcon icon={phoneSquareIconDefinition} /> (+84)
              338019200
            </div>
            <div className="mt-3">
              <FontAwesomeIcon icon={evelopIconDefinition} />{" "}
              phuocduc2012@gmail.com
            </div>
            <div className="mt-3">
              <FontAwesomeIcon icon={CVIconDefinition} />  {" "}
               <a href="https://phuocduc2020.github.io/" target="_blank" className="contact-cv">   phuocduc2020.github.io</a> (CV)
            </div>
          </div>
        </div>
        </Col>

        {/* map */}
        <Col md={6} xs={12}>
        <div className="mapStyles">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="100%"
                max-width="550px"
                height="450px"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=19%20HT45%20quan%2012&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
        {/* end map */}
        </Col>
      </Row>
      {/* end contact info */}

{/* footer */}
    


    <Footerr/>
    </Container>
    // <Container>

    // </Container>
  );
}
