import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import ProfilePic from '../img/dp.png';
import Parallax1 from '../img/parallax1.jpg';
import Parallax2 from '../img/parallax2.jpg';
import Parallax3 from '../img/parallax3.jpg';


class LandingPage extends Component {

    render() {
        return (
            <div>
                <div style ={{ width: '100%',  margin: 'auto'}}>
                <Parallax
                    blur={0}
                    bgImage={Parallax1}
                    bgImageAlt="1"
                    strength={200}
                    >
                    <div className="landing-grid">
                        
                        <img
                        src={ProfilePic}
                        alt="profile-pic"
                        className="profile-pic-img"
                        />
                        <hr/>
                        <h1>Hei, I'm <b>Sachenae</b></h1>
                       
                        </div>
                        </Parallax>

                         <Parallax
                            blur={10}
                            bgImage={Parallax3}
                            bgImageAlt="2"
                            strength={200}
                            >
                        <div className="banner-text" style={{ height: '400px' }}>
                        
                        <h3>Full Stack Dev | Metropolia Student | Open-Source Enthusiast</h3>
                        <h5>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</h5>
                        </div>
                        </Parallax>
                       
                        <Parallax strength={200}>
                        
                        <div className="social-links" style={{ height: '300px' }}>
                        <a href="https://www.linkedin.com/in/sachin-shrestha-7a8292128/" rel="noopener noreferrer"  target="_blank">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                        <a href="https://github.com/sachenae/" rel="noopener noreferrer"  target="_blank">
                            <i className="fa fa-github" aria-hidden="true" />
                        </a>
                        <a href="https://twitter.com/sachenae" rel="noopener noreferrer"  target="_blank">
                            <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                        <a href="https://www.facebook.com/juan.oneal.77" rel="noopener noreferrer"  target="_blank">
                            <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                        </div>
                            <Background className="custom-bg">
                                <img src={Parallax2} alt="fill" />
                            </Background>
                            </Parallax>
                       
                        </div>
                        
                   
                </div>
           
        );
    }
}

export default LandingPage;