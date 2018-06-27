import React, { Component } from 'react';
import { Grid, Cell, ListItem, ListItemContent } from 'react-mdl';
import InitialMap from './google_map';


class Contact extends Component {

    constructor(props){
        super(props);

        this.state = {
            markers: [{
                position: {
                    lat: -34.397,
                     lng: 150.644,
                }
            }]
        }
    }


    render() {
        return (
            <div className="contact-body">
             <Grid className="contact-grid">
             <Cell col={7}>
             <InitialMap
             containerElement={
                 <div style={{height: "800px"}} />
             }
             mapElement={
                <div style={{height: "700px"}} />
             }
             markers={this.state.markers}

             />
             </Cell>


             <Cell col={5} className='contact-cell'>
                <h3>Contact me</h3>
                <hr/>
                <div className="contact-list">
                <ListItem>
                    <ListItemContent style={{fontSize: '19px'}}>
                        <i className="fa fa-phone" aria-hidden="true"/>
                            +358 469510700
                    </ListItemContent>
                </ListItem>

                 <ListItem>
                    <ListItemContent style={{fontSize: '19px'}}>
                        <i className="fa fa-at" aria-hidden="true"/>
                            39sachen@gmail.com
                    </ListItemContent>
                </ListItem>

                <ListItem>
                    <ListItemContent style={{fontSize: '19px'}}>
                        <i className="fa fa-home" aria-hidden="true"/>
                            Siltakuja 2F 62, 02700, ESPOO
                    </ListItemContent>
                </ListItem>

                 <ListItem>
                    <ListItemContent style={{fontSize: '19px'}}>
                        <i className="fa fa-twitter" aria-hidden="true"/>
                            @sachenae
                    </ListItemContent>
                </ListItem>
                </div>

             </Cell>
             </Grid>
        
            </div>
        );
    }
}

export default Contact;

