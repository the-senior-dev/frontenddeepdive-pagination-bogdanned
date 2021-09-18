import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import MoviePage from './components/MoviePage';
import MainPage from './components/MainPage'

export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/movie/:id">
                        <MoviePage></MoviePage>
                    </Route>
                    <Route path="/*">
                        <MainPage></MainPage>
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}
