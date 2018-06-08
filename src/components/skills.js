import React, { Component } from 'react';
import Rater from 'react-star-ratings';

class Skills extends Component {

    render() {
        return (
            <div>
               <Rater interactive={false} rating={3} />
            </div>
        );
    }
}

export default Skills;