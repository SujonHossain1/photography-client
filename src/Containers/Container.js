/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */

import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from './Routes';

const loading = (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
        <div className="spinnerWrap">
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
);

const Container = () => (
    <main className="c-main">
        <Suspense fallback={loading}>
            <Switch>
                {routes.map(
                    (route, index) =>
                        route.component && (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={(props) => <route.component {...props} />}
                            />
                        )
                )}
                <Redirect from="/" to="/" />
            </Switch>
        </Suspense>
    </main>
);

export default React.memo(Container);
