import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';


import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import LogoImg from './img/myname.png';

class App extends Component {
  render() {
    return (
      <div >
    <Layout >
        <Header className="header-color" scroll title={<div> <img src = {LogoImg} width= '100px' alt=''/></div>} >
            <Navigation>
                <Link to="/landingpage">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title= "Menu">
            <Navigation>
                <Link to="/landingpage">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link> 
                
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
