import React from 'react'

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/prakash_tedx.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(60 - Math.random() * 20);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer...", "Web Designer...", "Competitive Programmer..." ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(50);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Prakash`} </h1>
                <h2><span className="txt-rotate" dataPeriod="2000" data-rotate='[ "Software Developer...", "Web Designer...", "Competitive Programmer..." ]'><span className="wrap">{text}</span></span></h2>
                  <p>I am an experienced software developer and web designer as well as a proficient competitive programmer. I possess good knowledge in JavaScript ans its libraries and frameworks like React js, Next js and Node js. On the other side I have strong grasp on Data Structures and Algorithms with over 800+ problems solved across plateforms. I have also thoroughly studied Database Management, Computer Networks, Operating systems amd Compiler Design. I have good hands in data analytics with SQL, MATLAB and R and machine learning with Python and MATLAB.</p>
                  <button className='resume' onClick={() => window.location.href = 'https://drive.google.com/file/d/1tU3a8CmaWL-sPMh0cxE-r9YFXcFhSVxa/view?usp=sharing'}>Resume <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className = "mainImg" src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
