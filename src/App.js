import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Slider from "./components/slider";


class  App extends Component { 
    render() { 
        return (
            <React.Fragment>
                <Navbar/>
                <Slider/>
            </React.Fragment>

        );
    }
}
 
export default App;