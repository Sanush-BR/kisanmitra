import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Slider from "./components/slider";
import Footer from './components/footer';
import {Route,Switch,Redirect} from "react-router-dom";
import Schemes from "./components/schemes";
import Loan from "./components/loans";
import Category from "./components/types";
import Farmer from './components/farmers';
import Login from "./components/forms/login";
import Register from "./components/forms/register";


class  App extends Component { 
    render() { 
        return (
            <React.Fragment>
                <Navbar/>
                <div>
                    <Switch>
                        <Route path="/" component={Slider} exact={true}/>
                        <Route path="/schemes" component={Schemes} exact={true}/>
                        <Route path="/loans" component={Loan} exact={true}/>
                        <Route path="/types" component={Category} exact={true}/>
                        <Route path="/farmers" component={Farmer} exact={true}/>
                        <Route path="/login" component={Login} exact={true}/>
                        <Route path="/register" component={Register} exact={true}/>
                    </Switch>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}
 
export default App;