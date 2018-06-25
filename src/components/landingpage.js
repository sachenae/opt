import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {

    render() {
        return (
            <div>
                <div style ={{ width: '100%',  margin: 'auto'}}>
                    <Grid className="landing-grid">
                        <Cell col={12}>
                        <img
                        src="http://www.themes-lab.com/conbis/assets/images/avatars/avatar7_big.png"
                        alt="profile-pic"
                        className="profile-pic-img"
                        />

                        <div className="banner-text">
                        <h1>Hei, I'm Sachenae</h1>
                        <h3>Full Stack Dev | Metropolia Student | Open-Source Enthusiast</h3>
                        <h5>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</h5>

                        <div className="social-links">
                        <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                        <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
                            <i className="fa fa-github" aria-hidden="true" />
                        </a>
                        <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
                            <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                        <a href="http://google.com" rel="noopener noreferrer"  target="_blank">
                            <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                        </div>
                        </div>
                        </Cell>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default LandingPage;