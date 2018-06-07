import React, { Component } from 'react';

import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {;

    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '400px', margin:'50px'}}>
                        <CardTitle style={{color: '#fff', height: '200px', 
                        background:'url(https://flawless.com.ph/forms/assets/global/images/avatars/profil3.jpg) center / cover' }}>
                        ReactProject #1
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque
                            ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. 
                            Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.  
                        </CardText>
                        <CardActions className="action-button" border>
                            <Button colored>Github Src</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                     <Card shadow={5} style={{minWidth: '400px', margin:'50px'}}>
                        <CardTitle style={{color: '#fff', height: '200px', 
                        background:'url(https://flawless.com.ph/forms/assets/global/images/avatars/profil3.jpg) center / cover' }}>
                        ReactProject #1
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque
                            ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. 
                            Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.  
                        </CardText>
                        <CardActions className="action-button" border>
                            <Button colored>Github Src</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    
                     <Card shadow={5} style={{minWidth: '400px', margin:'50px'}}>
                        <CardTitle style={{color: '#fff', height: '200px', 
                        background:'url(https://flawless.com.ph/forms/assets/global/images/avatars/profil3.jpg) center / cover' }}>
                        ReactProject #1
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque
                            ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. 
                            Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.  
                        </CardText>
                        <CardActions className="action-button" border>
                            <Button colored>Github Src</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                     <Card shadow={5} style={{minWidth: '400px', margin:'50px'}}>
                        <CardTitle style={{color: '#fff', height: '200px', 
                        background:'url(https://flawless.com.ph/forms/assets/global/images/avatars/profil3.jpg) center / cover' }}>
                        ReactProject #1
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque
                            ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. 
                            Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.  
                        </CardText>
                        <CardActions className="action-button" border>
                            <Button colored>Github Src</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>



                </div>
            )
        }else if(this.state.activeTab ===1) {
            return(
                <div><h1>this is nodejs</h1></div>
            )
        }else if(this.state.activeTab ===2) {
            return(
                <div><h1>this is c</h1></div>
            )
        }else if(this.state.activeTab ===3) {
            return(
                <div><h1>this is java</h1></div>
            )
        }else if(this.state.activeTab ===4) {
            return(
                <div><h1>this is games</h1></div>
            )
        }
    }

   

    render() {
        return (
            <div className="category-tabs">
                <Tabs 
                activeTab={this.state.activeTab}
                onChange={(tabId) => this.setState({activeTab: tabId})}
                ripple >
                    <Tab>React</Tab>
                    <Tab>NodeJS+Espress+MongoDB</Tab>
                    <Tab>C</Tab>
                    <Tab>Java</Tab>
                    <Tab>Games</Tab>
                </Tabs>
                
                <Grid>
                    <Cell col={12}>
                        <div className="content"> {this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                
            </div>
        );
    }
}

export default Projects;