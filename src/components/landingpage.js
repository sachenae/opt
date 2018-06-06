import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {

    render() {
        return (
            <div>
                <div style ={{width: '100%', margin: 'auto'}}>
                    <Grid className="landing-grid">
                        <Cell col={12}>
                        <img
                        src="http://www.themes-lab.com/conbis/assets/images/avatars/avatar7_big.png"
                        alt="profile-pic"
                        className="profile-pic-img"
                        />
                        
                        <div className="banner-text">
                        Full Stack Web Developer
                        </div>
                        </Cell>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default LandingPage;