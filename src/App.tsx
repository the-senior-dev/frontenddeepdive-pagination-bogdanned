import React from 'react'
import MainPage from './components/MainPage'
import MoviePage from './components/MoviePage'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route path="/movie/:id">
                        <MoviePage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
