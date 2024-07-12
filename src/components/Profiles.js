import React from 'react'

import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { HashLink } from 'react-router-hash-link';
import ltdc from "../assets/img/LeetCode_Logo_1.png"
import cf from "../assets/img/codeforces.webp"
import cc from "../assets/img/codechef.png"
import hr from "../assets/img/hackerrank.png"

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
                        <ul className="profile-text">
                            <li>
                              <a href='https://leetcode.com/u/pkjha0102/'>
                                  <button className="ltcd"><img src={ltdc} alt="logo" className='ltdcLogo'></img><span>Leetcode</span></button>
                              </a>
                            </li>
                            <li>
                              <a href='https://codeforces.com/profile/pkjha0102'>
                                  <button className="ltcd"><img src={cf} alt="logo" className='ltdcLogo'></img><span>Codeforces</span></button>
                              </a>
                            </li>
                            <li>
                              <a href='https://www.codechef.com/users/pk_jha_0102'>
                                  <button className="ltcd"><img src={cc} alt="logo" className='ltdcLogo'></img><span>Codechef</span></button>
                              </a>
                            </li>
                            <li>
                              <a href='https://www.hackerrank.com/profile/pkjha0102'>
                                  <button className="ltcd"><img src={hr} alt="logo" className='ltdcLogo'></img><span>Hackerrank</span></button>
                              </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
