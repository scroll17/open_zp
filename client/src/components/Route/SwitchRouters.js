import React from 'react';
import {  Route, Switch } from "react-router-dom";

import Deputies from "../Deputies/Deputies";

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
            {/*<Route*/}
            {/*    path={URL.STAN_OF_DEPUTIES}*/}
            {/*    component={}*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    path={URL.GRIVNA_RATE}*/}
            {/*    component={}*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    path={URL.RADIATION}*/}
            {/*    component={}*/}
            {/*/>*/}
            {/*<Route component={} />*/}
        </Switch>
    )
}

export default SwitchRouters;
