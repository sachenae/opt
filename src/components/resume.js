import React, { Component } from 'react';
import ResumeImg from '../img/resume-portfolio.png';
import { Button } from 'react-mdl';

class Resume extends Component {

    render() {
        return (
            <div className="resume-portfolio">
            <img src = {ResumeImg} alt=''/>
            <Button className= 'download-button' raised ripple>Download a copy</Button>
            </div>
        );
    }
}

export default Resume;