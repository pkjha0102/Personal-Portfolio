import React from 'react'

import edu1 from "../assets/img/edu1.jpg";
import edu2 from "../assets/img/edu2.jpg";
import edu3 from "../assets/img/edu3.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Education = () => {
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
    <section className="education" id="educations">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="education-bx wow zoomIn">
                        <h2>Education</h2>
                        <p>Here is a brief summary of my education till now.<br></br> It has school and grade obtained.</p>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} className="owl-carousel owl-theme education-slider">
                            <div className="item">
                                <img src={edu1} alt="Image" className='image'/>
                                <div class="middle">
                                  <div class="text"><a href='https://drive.google.com/file/d/1BQcpG5QhUm4iJ1U9fycrzc5uWMoEemjV/view?usp=drive_link'>See Transcript</a></div>
                                </div>
                                <h5>College (Highest Degree)</h5>
                            </div>
                            <div className="item">
                                <img src={edu2} alt="Image" className='image'/>
                                <div class="middle">
                                  <div class="text"><a href='https://drive.google.com/file/d/10POyVnDo0504yt0NsWg698d_6288Lzd8/view?usp=drive_link'>See Transcript</a></div>
                                </div>
                                <h5>Intermediate</h5>
                            </div>
                            <div className="item">
                                <img src={edu3} alt="Image" className='image'/>
                                <div class="middle">
                                  <div class="text"><a href='https://drive.google.com/file/d/1pKrmdD64qVXMzLjsCJQRY02Xbo9q4zUq/view?usp=drive_link'>See Transcript</a></div>
                                </div>
                                <h5>High School</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
