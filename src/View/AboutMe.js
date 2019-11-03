import React from "react";
import "../css/About-me.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbarr from "../Components/Navbarr";
import Brand from "../Components/Brand";
import Footerr from "../Components/Footerr";
import mypic from "../image/mypic.jpg";

export default function AboutMe() {
  return (
    <Container fluid={true} className="dashboard-page">
      {/* navbar */}
      <Row className="brand-navbar" id="nav_bar">
        <Brand />
        <Navbarr />
      </Row>
      {/* end navbar  */}

      {/* CV */}
      <div className="img-about-cover">
        <div className="intro-content">
          <div className="table-cell">
            <div className="container">
            <h1 className="intro-title">Nguyễn Phước Đức</h1>
            <p className="intro-subtitle">Front End Developer</p>
          </div>
          </div>
        </div>
      </div>
      <Col className="cv">
        <div className="cv-table-cell">
          <img className="cv" src={mypic} />
          {/* <h1>Nguyễn Phước Đức</h1>
          <p className="pcv-head">Front End Developer</p> */}
          {/* <p className="pcv-head">Computer Science</p> */}
        </div>
        <Col className="cv-perso-info">
          <h1>
            <b>Personal Information</b>
          </h1>
          <p className="pcvperso-info">
            Date of birth: 01 April 1992
            <br />
            Phone: 0338019200 <br />
            Email: phuocduc2012@gmail.com <br />
            Address: 19 Hiep Thanh Ward, Lê Văn Khương Street, District 12, Hồ
            Chí Minh City <br />
            Facebook: https://www.facebook.com/duc.nguyen.54738
          </p>

          <hr />

          <Row className="container cvskill">
            <Col md={6} xs={12}>
              <h1>Skills</h1>
              <ul className="cvskill-ul">
                <div>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>ReactJS</li>
                  <li>Photoshop</li>
                </div>
                <div>
                  <li>Github</li>
                  <li>Python</li>
                  <li>Postgree</li>
                  <li>Network Configuration</li>
                </div>
              </ul>
            </Col>

            <Col md={6} xs={12}>
              <h1>About Me</h1>
              <p className="skill-aboutme">
                I was an application support at an education environment. My
                routine job was dealing with third party application to assist
                the school. However, I did not absorb clearly what they were
                working on code. So that,
              </p>
              <p>
                I decided to join some coding courses and study on my own. Since
                taking coding course in CoderSchool, I start improving my
                knowledge and being confidence in building websites and
                projects.
              </p>
              <p>
                And, I believe the key to making good products is passisonate
                and non-stop improving every day.
              </p>
            </Col>
          </Row>
          <hr />

          <h1>
            <b>Education</b>
          </h1>

          <div className="flip-card-all">
            {/* flip carrd saigontech */}
            <div className="flip-card col-12 col-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="edu-school">
                    <div className="flip-front-title">
                      <h2>Saigon Institude of Technology</h2>
                      <p>Nov. 2011 - Sep. 2016</p>
                    </div>
                    <img className="sgtech_img" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="edu-detail">
                    <ul>
                      <li>
                        SaigonTech is an official affiliate of Houston Community
                        College, Texas, USA
                      </li>
                      <li>My major is Networking</li>
                      <li>
                        I got Degree of Completion, Mirosoft Server and
                        Networking
                      </li>
                      <li>I got EAL Certificate</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end flip card*/}
            {/* flip carrd  T3H*/}
            <div className="flip-card col-12 col-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="edu-school">
                    <div className="flip-front-title">
                      <h2>CSC Center</h2>
                      <p>July. 2019 - August. 2019</p>
                    </div>
                    <img className="csc_img" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="edu-detail">
                    <ul>
                      <li>
                        <strong>5 weeks for C basic programming</strong>
                      </li>
                      <li>
                        Knowledge: variable, function, array, operator, ,etc.
                      </li>
                      <li>
                        <strong>3 months for Javarscript</strong>
                      </li>
                      <ul>
                        Knowledge:
                        <li>Build client applications</li>
                        <li>Build a service application</li>
                        <li>Interface design with Bootstrap </li>
                        <li>Use Google Map with JavaScript </li>
                        <li>Using PDF Forms with JavaScript </li>
                        <li>Using Graph / Chart in JavaScript </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end flip card CoderSchool*/}
            {/* flip carrd  */}
            <div className="flip-card col-12 col-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="edu-school">
                    <div className="flip-front-title">
                      <h2>CoderSchool</h2>
                      <p>Sep. 2019 - Dep. 2019</p>
                    </div>
                    <img className="coder_img" />
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="edu-detail">
                    <ul>
                      <li>HTML & CSS</li>
                      <li>Javascript</li>
                      <li>ReactJS</li>
                      <li>Python</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* end flip card*/}
          </div>
        </Col>
      </Col>
      {/* end CV */}
      <Footerr />
    </Container>
  );
}
