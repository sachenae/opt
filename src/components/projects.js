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
                                <Card shadow={5} style={{minWidth: '300px', margin:'50px'}}>
                                    <CardTitle style={{color: '#000', height: '200px', 
                                    background:'url(http://i32.photobucket.com/albums/d22/sachenae/convoker_zpss6tgtrsq.png) center / cover' }}>
                                    Convoker - chat application
                                    </CardTitle>
                                    <CardText>
                                      A web chat application where you can chat with others in real time. Sockets.io used with react libraries.
                                      To use the demo, at least two hosts are required in different devices with same URL.
                                    </CardText>
                                    <CardActions className="action-button" border>
                                    <Button colored> <a target="_blank" href="https://github.com/sachenae/convoke" rel="noopener noreferrer" >Github Src</a></Button>
                                    <Button colored> <a target="_blank" href="https://convoker04.herokuapp.com/" rel="noopener noreferrer" >Live Demo</a></Button>
                                    </CardActions>
                                    <CardMenu style={{color: '#fff'}}>
                                        <IconButton name="share" />
                                    </CardMenu>
                                </Card>

                                 <Card shadow={5} style={{minWidth: '400px', margin:'50px'}}>
                                    <CardTitle style={{color: '#000', height: '200px', 
                                    background:'url(http://i32.photobucket.com/albums/d22/sachenae/weather-graph_zpss49faey1.png) center / cover' }}>
                                    Weather Forecast - Graph
                                    </CardTitle>
                                    <CardText>
                                      A react application which shows weather forecast for five days for any searched place. 
                                      This app fetches data from weather API and displays using graph and google Maps.
                                      To use the demo, just type in and hit submit button.
                                      
                                    </CardText>
                                    <CardActions className="action-button" border>
                                    <Button colored> <a target="_blank" href="https://github.com/sachenae/weather_graph" rel="noopener noreferrer" >Github Src</a></Button>
                                    <Button colored> <a target="_blank" href="https://weather-forecast39.herokuapp.com/" rel="noopener noreferrer" >Live Demo</a></Button>
                                    </CardActions>
                                    <CardMenu style={{color: '#fff'}}>
                                        <IconButton name="share" />
                                    </CardMenu>
                                </Card>

                                <Card shadow={5} style={{minWidth: '400px', margin:'50px'}}>
                                    <CardTitle style={{color: '#fff', height: '200px', 
                                    background:'url(http://i32.photobucket.com/albums/d22/sachenae/reactLogo_zpsc27yfp4q.jpg) center / cover' }}>
                                    Post Notes App
                                    </CardTitle>
                                    <CardText>
                                      An application to recieve notes from user and save it to remote API and fetched again when required. 
                                      Redux is used for state management and Redux-router is used for navigation. 
                                      
                                      
                                    </CardText>
                                    <CardActions className="action-button" border>
                                    <Button colored> <a target="_blank" href="https://github.com/sachenae/React_redux_router" rel="noopener noreferrer" >Github Src</a></Button>
                                    <Button colored> <a target="_blank" href="" rel="noopener noreferrer" >Live Demo</a></Button>
                                    </CardActions>
                                    <CardMenu style={{color: '#000'}}>
                                        <IconButton name="share" />
                                    </CardMenu>
                                </Card>
                        

                   


                </div>
            )
        }else if(this.state.activeTab ===1) {
            return(
                <div className="projects-grid">
                       
                <Card shadow={5} style={{minWidth: '400px', margin:'50px'}}>
                    <CardTitle style={{color: '#000', height: '200px', 
                    background:'url(http://i32.photobucket.com/albums/d22/sachenae/nodejs_zpsiovprei1.png) center / cover' }}>
                    Web Image Viewer
                    </CardTitle>
                    <CardText>
                    Web application to view, edit, delete, upload and save images directly to MongoDB.
                    NodeJS and Express were used to manage various requests and responses between view and controller.
                    </CardText>
                    <CardActions className="action-button" border>
                    <Button colored> <a target="_blank" href="https://github.com/sachenae/Image-viewer" rel="noopener noreferrer" >Github Src</a></Button>
                    <Button colored> <a target="_blank" href="" rel="noopener noreferrer" >Live Demo</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
    
            )
        }else if(this.state.activeTab ===2) {
            return(
                <div><h1>...</h1></div>
            )
        }else if(this.state.activeTab ===3) {
            return(
                    <div className="projects-grid">
                       
                        <Card shadow={5} style={{minWidth: '400px', margin:'50px'}}>
                            <CardTitle style={{color: '#000', height: '200px', 
                            background:'url(http://i32.photobucket.com/albums/d22/sachenae/booklets_zpsg1puhvlx.png) center / cover' }}>
                            Booklets-Initial
                            </CardTitle>
                            <CardText>
                               Financial record keeping app which handles saving user inputted data
                               about each transaction with details. Spring MVC and SQL with servlets used for backend.
                                HTML and CSS used for view.
                            </CardText>
                            <CardActions className="action-button" border>
                            <Button colored> <a target="_blank" href="https://github.com/sachenae/booklets-initial" rel="noopener noreferrer" >Github Src</a></Button>
                            <Button colored> <a target="_blank" href="https://booklets-app.herokuapp.com/" rel="noopener noreferrer" >Live Demo</a></Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        </div>
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
                    <Tab>NodeJS+Express+MongoDB</Tab>
                    <Tab>React Native</Tab>
                    <Tab>Java</Tab>
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