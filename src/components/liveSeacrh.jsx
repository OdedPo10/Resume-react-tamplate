import React, { Component } from 'react';
class LiveSearch extends Component {
    state = { 
        str:'',
     } 
    render() { 
        return (
            <React.Fragment>
                <input type="text" name="" id="" onKeyPress={(ev)=>this.livePrint(ev)}/>
                <label htmlFor=""><h1 className="text-success">{this.state.str}</h1></label>
            </React.Fragment>
        );
    }
    livePrint(ev){
        this.setState({str:ev.target.value})
    }
}
 
export default LiveSearch;