import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
        super (props);
        this.state={
    count:0
        }
    }
    componentDidMount =()=>{
        setInterval(() =>{
this.setState(prevState=>({
    count:prevState.count+1,
    
}));
console.log("component did mount ()")
        },1000);
    }
    componentDidUpdate() {
        console.log("component did update")
    }
    componentWillUnmount() {
        console.log("component will unmount")
    }
    render() {
        return (
            <div>
              counter:{this.state.count}  
            </div>
        )
    }
}
export default Counter