import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./Home/Home'));

const App = () => (
    <BrowserRouter>
        <Switch>
            <Suspense fallback={<div> Loading... </div>}>
                <Route path="/" exact component={Home} />
            </Suspense>
        </Switch>
    </BrowserRouter>
);

export default App;
