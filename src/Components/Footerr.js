import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../css/Footer.css";
import { Link } from "react-router-dom";

// font awsome react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
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

export default function Footerr() {
  return (
    <MDBFooter className="footer-cover font-small pt-4 mt-4 ">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title footer-content">Sacred Fire</h5>
            <p className="footer-sentence">
              Learn More About Life Values Today
            </p>


           


          </MDBCol>
          <MDBCol md="4">
            <ul className="footer-list">
            <div className="footer-info-title">Information</div>
              {/* <Link to="/dashboard">Home</Link> */}
              <Link to="/aboutMe">About</Link>
              <Link to="/product">Product</Link>
              <Link to="/login">Login</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </MDBCol>

            <MDBCol md="4">
            
            <div className="footer-address">
              <FontAwesomeIcon icon={MapMakerIconDefinition} />  109/4G, Le Van
              Khuong Street, Hiep Thanh ward, Dist 12, Ho Chi Minh City
            </div>
            <div className="mt-2 footer-address">
              <FontAwesomeIcon icon={phoneSquareIconDefinition} /> (+84)
              338019200
            </div>
            <div className="mt-2 footer-address">
              <FontAwesomeIcon icon={evelopIconDefinition} />{" "}
              phuocduc2012@gmail.com
            </div>
            <div className="mt-2 footer-address">
              <FontAwesomeIcon icon={CVIconDefinition} />  {" "}
               <a href="https://phuocduc2020.github.io/" target="_blank" className="contact-cv">   phuocduc2020.github.io</a> (CV)
            </div>
            </MDBCol>



        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid className="footer-copyright">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="/dashboard"> Duc Nguyen </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
