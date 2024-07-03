import React from 'react'

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png"

export const Accomplishments = () => {
    return (
        <section className="accomplishment" id="accomplishments">
      <TrackVisibility>
        {({ isVisible }) =>
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="accomplishment-bx wow zoomIn">
                          <h2>Accomplishments</h2>
                          <p>Here are my few achievements till now.</p>
                          <div className='row'>
                                <div className='col'>
                                    <ul className='accom1'>
                                        <li>Secured a percentile of 98.699 All India in IIT-JEE Main 2021 and All India Rank of 6640 in JEE Advanced 2021.</li>
                                        <li>Secured position in top 0.1 percent in subject of Science in CBSE AISSE 2018 among 18 lakh students.</li>
                                        <li>3 star coder on Codechef with highest rating of 1661 and Pupil on Codeforces with highest rating of 1245.</li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <ul className='accom2'>
                                        <li>Solved 750+ problems on Data Structures and Algorithms across various platforms.</li>
                                        <li>Organized 10+ events in my college under my supervision during my tenure of Coordinator in Yavanika - The
                                        Dramatics Society. Displayed exceptional leadership on multiple occasions and won medals for my college.</li>
                                        <li>Co-founded the annual dramatics festival of my college.</li>
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