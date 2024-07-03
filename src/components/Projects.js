import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pro1.png";
import projImg2 from "../assets/img/pro2.png";
import projImg3 from "../assets/img/pro3.png";
import projImg4 from "../assets/img/pro4.png";
import projImg5 from "../assets/img/pro5.png";
import projImg6 from "../assets/img/pro6.png";
import projImg7 from "../assets/img/pro7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsAll = [
    {
      title: "Face Regonition Based Attendance System",
      description: "Machine Learning",
      imgUrl: projImg1,
      link: 'https://github.com/pkjha0102/Face-Recognition-Based-Attendance-System',
    },
    {
      title: "Stock Price Prediction Using ARIMA, GARCH and Random Forest Models",
      description: "Data Analytics",
      imgUrl: projImg2,
      link: 'https://github.com/pkjha0102/Stock-Price-Prediction-and-Volatality-Modeling-Using-ARIMA--GARCH-and-Random-Forest',
    },
    {
      title: "Personal Portfolio",
      description: "Design & Development",
      imgUrl: projImg3,
      link: 'https://github.com/pkjha0102/Personal-Portfolio',
    },
    {
      title: "Web Based Music Player",
      description: "Design & Development",
      imgUrl: projImg4,
      link: 'https://github.com/pkjha0102/Music-Player',
    },
    {
      title: "Reaction Diffusion Model and Turing's Patterns",
      description: "Mathematics",
      imgUrl: projImg5,
      link: 'https://github.com/pkjha0102/Reaction-Diffusion-Model-and-Turing-s-Patterns',
    },
    {
      title: "Smart Parking",
      description: "Arduino",
      imgUrl: projImg6,
      link: 'https://github.com/pkjha0102/Smart-Parking',
    },
    {
      title: "Algorithms in Numerical Linear Algebra",
      description: "Mathematics",
      imgUrl: projImg7,
      link: 'https://github.com/pkjha0102/Numerical-Linear-Algebra',
    },
  ];

  const projectsWeb = [
    {
      title: "Personal Portfolio",
      description: "Design & Development",
      imgUrl: projImg1,
      link: 'https://github.com/pkjha0102/Personal-Portfolio',
    },
    {
      title: "Web Based Music Player",
      description: "Design & Development",
      imgUrl: projImg2,
      link: 'https://github.com/pkjha0102/Music-Player',
    },
    {
      title: "Face Regonition Based Attendance System",
      description: "Machine Learning",
      imgUrl: projImg3,
      link: 'https://github.com/pkjha0102/Face-Recognition-Based-Attendance-System',
    },
  ];

  const projectsML = [
    {
      title: "Face Regonition Based Attendance System",
      description: "Machine Learning",
      imgUrl: projImg3,
      link: 'https://github.com/pkjha0102/Face-Recognition-Based-Attendance-System',
    },
    {
      title: "Stock Price Prediction Using ARIMA, GARCH and Random Forest Models",
      description: "Data Analytics",
      imgUrl: projImg4,
      link: 'https://github.com/pkjha0102/Stock-Price-Prediction-and-Volatality-Modeling-Using-ARIMA--GARCH-and-Random-Forest',
    },
  ];

  const projectsData = [
    {
      title: "Stock Price Prediction Using ARIMA, GARCH and Random Forest Models",
      description: "Data Analytics",
      imgUrl: projImg4,
      link: 'https://github.com/pkjha0102/Stock-Price-Prediction-and-Volatality-Modeling-Using-ARIMA--GARCH-and-Random-Forest',
    },
  ];

  const projectsMaths = [
    {
      title: "Reaction Diffusion Model and Turing's Patterns",
      description: "Mathematics",
      imgUrl: projImg5,
      link: 'https://github.com/pkjha0102/Reaction-Diffusion-Model-and-Turing-s-Patterns',
    },
    {
      title: "Smart Parking",
      description: "Arduino",
      imgUrl: projImg6,
      link: 'https://github.com/pkjha0102/Smart-Parking',
    },
    {
      title: "Algorithms in Numerical Linear Algebra",
      description: "Mathematics",
      imgUrl: projImg7,
      link: 'https://github.com/pkjha0102/Numerical-Linear-Algebra',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have created a wide variety of projects including Web Development, Machine Learning, Data Analytics and Mathematics. These include spectrum of skills which shows my ability to diversify my learning and gain knowledge in multiple fields.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Machine Learning</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Data Analytics</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Mathematics</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsAll.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsWeb.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projectsML.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    <Row>
                        {
                          projectsData.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                    <Row>
                        {
                          projectsMaths.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
