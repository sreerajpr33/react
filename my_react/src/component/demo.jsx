import {Component} from "react";

export default class Demo_class extends Component{
constructor(){
    super()
}
render(){
return(
    <h2>yello pink{this.props.color}{this.props.height}</h2>
)
}
}


