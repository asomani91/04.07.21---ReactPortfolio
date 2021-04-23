import React from 'react'
import { Navbar, Intro, Project, Footer, About } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
export default function Layout() {
    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Intro} />
                <Route exact path='/about' component={About} />
            </Switch>
            <Project />
            <Footer />
        </React.Fragment>
    )
}
