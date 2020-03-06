import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import DynamicComponentsData from '../ComponentsData';

const RenderDynamicComponent = (ComponentName) => {
  const Component = React.lazy(() => import(`../components/${ComponentName}`));

  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} title={ComponentName} />
    </Suspense>
  );
}

const App = () => {
  let dynamicComponents = DynamicComponentsData;
  return (
    <Router>
      <div>
        <div>
          <h1>List of components</h1>
          {
            dynamicComponents.map((item, index) => {
              return (
                <div key={index}>
                  <NavLink
                    exact
                    activeClassName="selected"
                    to={item.route}
                  >
                    {item.path}
                  </NavLink>
                </div>
              )
            })
          }
        </div>
        <div className="App">
          <Switch>
            {
              dynamicComponents.map((item, index) => {
                return (
                  <Route
                    key={index}
                    path={item.route}
                    exact
                    component={RenderDynamicComponent(item.path)}
                  />
                )
              })
            }
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;