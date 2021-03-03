import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { authCheckState } from "./store/actions/user";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./layouts/layout";
import Auth from "./layouts/Auth";
const App = () =>{
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.user.token) ? 1 : 0

  useEffect(() => { 
    dispatch(authCheckState())

  }, [dispatch])

  let routes  = (
    <Switch>
        <Route  path="/:auth" exact component={Auth} />
        <Route  path="/dashboard" component={Layout} />
        <Redirect to="/login" />
    </Switch>)
    if(isAuth === 1){
      routes  = (
        <Switch>
            <Route  path="/dashboard" component={Layout} />
            <Redirect to="/dashboard" />
        </Switch>)
    }

  return (
    <BrowserRouter>
       {routes}
    </BrowserRouter>
  );
}

export default App;
