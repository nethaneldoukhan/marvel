import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/home/home'
import Favorites from './components/favorites/favorites'
import CV from './components/cv/cv'
import NoMatch from './components/noMatch/noMatch'

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/favorites' component={Favorites} />
            <Route exact path='/cv' component={CV} />
            <Route component={NoMatch}/>
        </Switch>
    );
}

export default Routes