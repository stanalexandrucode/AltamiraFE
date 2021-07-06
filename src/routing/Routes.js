import React from 'react';
import {Switch} from 'react-router-dom';import {Route} from 'react-router-dom';
import Home from "../component/Home";
import AddTaskForm from "../component/AddTaskForm";

const Routes = () => {

    return (
        <React.Fragment>
            <Switch>
                <Route path="/addNewTask" component={AddTaskForm}/>
                <Route path="/" exact component={Home}/>
            </Switch>
        </React.Fragment>
    );
};

export default Routes;
