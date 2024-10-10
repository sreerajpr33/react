import {Component} from "react";

class Sample_class extends Component{
    constructor(){
        super()
        this.state={color:'red',width:'20px'}
    }
    render(){
        return(
            <h2>apple is{this.state.color}{this.state.width}</h2>
        )
    }
        
    
}

export default Sample_class 