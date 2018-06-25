import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';
import Skills from './skills';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/landingpage" component={LandingPage} />
    </Switch>
)

export default Main;