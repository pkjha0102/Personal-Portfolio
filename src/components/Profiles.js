import React from 'react'

import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { HashLink } from 'react-router-hash-link';

export const Profiles = () => {
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
    <section className="profile" id="profiles">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="profile-bx wow zoomIn">
                        <h2>Profiles</h2>
                        <p>Here is a brief summary of my programming journey on various coding plateforms till now.</p>
                        <span className="profile-text">
                            <a href='https://leetcode.com/u/pkjha0102/'>
                                <button className="ltcd"><span>Leetcode</span></button>
                            </a>
                            <a href='https://codeforces.com/profile/pkjha0102'>
                                <button className="ltcd"><span>Codeforces</span></button>
                            </a>
                            <a href='https://www.codechef.com/users/pk_jha_0102'>
                                <button className="ltcd"><span>Codechef</span></button>
                            </a>
                            <a href='https://www.hackerrank.com/profile/pkjha0102'>
                                <button className="ltcd"><span>Hackerrank</span></button>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
