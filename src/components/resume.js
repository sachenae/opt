import React, { Component } from 'react';
import ResumeImg from '../img/resume-portfolio.png';
import { Button } from 'react-mdl';

class Resume extends Component {

    render() {
        return (
            <div className="resume-portfolio">
                <img src = {ResumeImg} alt=''/>
                    <div className= "download-button">
                        <Button raised ripple>Download a copy</Button>
                    </div>
            </div>
        );
    }
}

export default Resume;