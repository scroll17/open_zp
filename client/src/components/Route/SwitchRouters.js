import React from 'react';
import {  Route, Switch } from "react-router-dom";

import Deputies from "../Deputies/Deputies";
import StanOfDeputies from "../StanOfDeputies/StanOfDeputies";
import Radiation from "../Radiation/Radiation";

import { URL } from "../../constants";

function SwitchRouters() {
    return(
        <Switch>
            <Route
                exact
                path={URL.HOME}
                component={Deputies}
            />
            {/*<Route*/}
            {/*    path={URL.ABOUT}*/}
            {/*    component={}*/}
            {/*/>*/}
            <Route
                path={URL.STAN_OF_DEPUTIES}
                component={StanOfDeputies}
            />
            <Route
                path={URL.RADIATION}
                component={Radiation}
            />
            {/*<Route component={} />*/}
        </Switch>
    )
}

export default SwitchRouters;
