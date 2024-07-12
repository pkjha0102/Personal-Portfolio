import React from 'react'

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png"

export const Responsibilities = () => {
    return (
        <section className="PoR" id="PoRs">
      <TrackVisibility>
        {({ isVisible }) =>
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="PoR-bx wow zoomIn">
                          <h2>Responsibilities</h2>
                          <p>Below are my few Roles and Responsibilities ranging from culturals and sports to creatives and design. Thse depict my involvement and excellance in extra curricular activities apart from usual studies.</p>
                          <div className='row'>
                                <div className='col'>
                                    <ul className='PoR1'>
                                        <li>Assistant Head Coordinator in Training and Placement Cell.</li>
                                        <li>Co-founder and Coordinator of Natyarangam - Annual Dramatics Fest of IIT Patna.</li>
                                        <li>Part of the team that secured Gold Medal in Dramatics at Annual Techno-Cultural Fest of IIIT Bhagalpur,
                                        Enyugma’22.</li>
                                        <li>Coordinator of YAVANIKA - The Dramatics Society of IIT Patna.</li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <ul className='PoR2'>
                                        <li>Represented IIT Patna in Dramatics at Inter IIT Cultural Meet 5.0 in IIT Madras and 6.0 in IIT Kharagpur. Led
                                        the team that secured 3 Silver Medals.</li>
                                        <li>Represented IIT Patna in Infinito'23 - The Annual Sports Fest of IIT Patna.</li>
                                        <li>Sub-Coordinator in Creatives and Design and member of organising team of TedxIITPatna.</li>
                                    </ul>
                                </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>}
      </TrackVisibility>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
    )
}