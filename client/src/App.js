import React, {Component} from 'react';
import {Router, Route, Switch } from "react-router-dom";

import history from "./boot/browserHistory";

import MainPage from "./pages/MainPage/MainPage";
import BasketPage from "./pages/BasketPage/BasketPage";

import Header from "./components/Header/Header";

import { URL, STORE } from "./constants";
import { clearProductFound } from "./actions/actionCreators/deputyCreators"

history.listen(_ => {
    STORE.dispatch(clearProductFound());
});

class App extends Component {

    render() {
        return (
            <Router history={history}>

                <Header />

                <Switch>

                    <Route exact path={URL.HOME} component={MainPage} />

                    <Route path={URL.BASKET} component={BasketPage} />

                </Switch>

            </Router>
        )
    }
}

export default App;
