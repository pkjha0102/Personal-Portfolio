import React from 'react'

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import C from "../assets/img/C_Logo.png";
import CPlus from "../assets/img/c++.png";
import python from "../assets/img/Python-logo-notext.svg.png";
import js from "../assets/img/javascript-logo-javascript-icon-transparent-free-png.webp";
import sql from "../assets/img/sql.png";
import r from "../assets/img/R_logo.svg.png";
import matlab from "../assets/img/Matlab_Logo.png";
import figma from "../assets/img/1667px-Figma-logo.svg.png";
import rt from "../assets/img/react.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import arduino from "../assets/img/arduino.png";
import courseWork from "../assets/img/courseWork.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <TrackVisibility>
        {({ isVisible }) =>
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Technical Skills</h2>
                            <Tab.Container id="skills-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                  <Nav.Item>
                                    <Nav.Link eventKey="first">Languages and Tools</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link eventKey="second">Theoretical</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                    <Nav.Link eventKey="third">Course Works</Nav.Link>
                                  </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                  <Tab.Pane eventKey="first">
                                    <Row>
                                    <div id='logos'>
                                      <div><img src={C} alt="Image" /></div>
                                      <div><img src={CPlus} alt="Image" /></div>
                                      <div><img src={js} alt="Image" /></div>
                                      <div><img src={python} alt="Image" /></div>
                                      <div><img src={matlab} alt="Image" /></div>
                                      <div><img src={r} alt="Image" /></div>
                                      <div><img src={figma} alt="Image" /></div>
                                      <div><img src={sql} alt="Image" /></div>
                                      <div><img src={rt} alt="Image" /></div>
                                      <div><img src={html} alt="Image" /></div>
                                      <div><img src={css} alt="Image" /></div>
                                      <div><img src={arduino} alt="Image" /></div>
                                    </div>
                                    </Row>
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="second">
                                  <div className='row'>
                                    <div className='col'>
                                      <ul className='theoryCourses1'>
                                        <li>Data Structures and Algorithms</li>
                                        <li>Database Management</li>
                                        <li>Operating systems</li>
                                        <li>Computer Networks</li>
                                        <li>Compiler Design</li>
                                        <li>Optimization techniques</li>
                                        <li>Computer Architecture</li>
                                      </ul>
                                    </div>
                                    <div className='col'>
                                      <ul className='theoryCourses2'>
                                        <li>Linear and Numerical Linear Algebra</li>
                                        <li>Mathematical Statistics</li>
                                        <li>Probability Theory and Random Processes</li>
                                        <li>Data Science</li>
                                        <li>Discrete Mathematics</li>
                                        <li>Mathematical Finance</li>
                                        <li>Economics</li>
                                      </ul>
                                    </div>
                                  </div>
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="third">
                                      <div className="courseitem">
                                        <img src={courseWork} alt="Image" className='courseimage'/>
                                        <div class="coursemiddle">
                                          <div class="coursetext"><a href='https://drive.google.com/file/d/1mqhNp279jmgFfvIlERR9VpiQuqI1TFOS/view?usp=sharing'>Show Certificate</a></div>
                                        </div>
                                      </div>
                                  </Tab.Pane>
                                </Tab.Content>
                              </Tab.Container>
                      </div>
                  </div>
              </div>
          </div>}
      </TrackVisibility>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
