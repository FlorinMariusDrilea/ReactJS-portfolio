import React from 'react'
import { Switch, Route } from 'react-router-dom';
import MainPage from './mainpage';
import Contact from './contact';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/resume" component={Resume}></Route>
        <Route exact path="/contact" component={Contact}></Route>
    </Switch>
)

export default Main;